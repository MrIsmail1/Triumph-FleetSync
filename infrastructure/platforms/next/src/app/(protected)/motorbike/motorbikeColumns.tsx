"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RiMore2Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Modal } from "@/components/common/Modal";
import { Motorbike } from "@/types/MotorbikeResponses";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, motorbikeDelete } from "@/lib/api";
import EditMotorbikeForm from "@/components/motorbike/EditMotorbikeForm";

export function buildMotorbikeColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedMotorbike, setSelectedMotorbike] = useState<Motorbike | null>(null);

    const queryClient = useQueryClient();

    // Récupérer l'utilisateur et son rôle
    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    // Mutation pour supprimer une moto
    const { mutate: deleteMotorbike, isLoading } = useMutation({
        mutationFn: motorbikeDelete,
        onSuccess: () => {
            queryClient.invalidateQueries(["motorbikes"]);
            setDeleteModalOpen(false);
            setSelectedMotorbike(null);
        },
    });

    const handleDeleteClick = (motorbike: Motorbike) => {
        setSelectedMotorbike(motorbike);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (motorbike: Motorbike) => {
        setSelectedMotorbike(motorbike);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedMotorbike) return;
        deleteMotorbike(selectedMotorbike.identifier);
    };

    // Définition des colonnes
    let columns: ColumnDef<Motorbike>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value: boolean) =>
                        table.toggleAllPageRowsSelected(value)
                    }
                    aria-label="Tout sélectionner"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value: boolean) => row.toggleSelected(value)}
                    aria-label="Sélectionner la ligne"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "licensePlate",
            header: "Plaque d'immatriculation",
            cell: ({ row }) => row.original.licensePlate?.value ?? "Non renseigné",
        },
        {
            id: "vehicleIdentificationNumber",
            header: "Numéro de châssis (VIN)",
            cell: ({ row }) => row.original.vehicleIdentificationNumber?.value ?? "Non renseigné",
        },
        {
            id: "color",
            header: "Couleur",
            cell: ({ row }) => row.original.color ?? "Non renseigné",
        },
        {
            id: "mileage",
            header: "Kilométrage",
            cell: ({ row }) => row.original.mileage ?? "Non renseigné",
        },
        {
            id: "modelMotorbike",
            header: "Modèle",
            cell: ({ row }) => row.original.modelMotorbikeName ?? "Non renseigné",
        },
        {
            id: "driver",
            header: "Conducteur",
            cell: ({ row }) => {
                const firstName = row.original.driverFirstName;
                const lastName = row.original.driverLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        },
        {
            id: "fleet",
            header: "Flotte",
            cell: ({ row }) => row.original.fleetName ?? "Non renseigné",
        },
        {
            id: "status",
            header: "Statut",
            cell: ({ row }) => row.original.status?.value ?? "Non renseigné",
        },
        {
            id: "createdAt",
            header: "Date de création",
            cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString("fr-FR"),
        },
        {
            id: "updatedAt",
            header: "Dernière modification",
            cell: ({ row }) => new Date(row.original.updatedAt).toLocaleDateString("fr-FR"),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const motorbike = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(motorbike)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(motorbike)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Modal d'édition */}
                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier moto"
                            cancelText="Annuler"
                            description="Modifiez les informations de la moto."
                        >
                            {selectedMotorbike && currentUser && (
                                <EditMotorbikeForm motorbike={selectedMotorbike} setOpen={setEditModalOpen} currentUserRole={currentUser?.role} />
                            )}
                        </Modal>

                        {/* Modal de confirmation pour suppression */}
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer la moto"
                            description="Êtes-vous sûr de vouloir supprimer cette moto ? Cette action est irréversible."
                            confirmText="Supprimer"
                            cancelText="Annuler"
                            onConfirm={confirmDelete}
                        >
                            <span className="text-red-400">Cette action est irréversible.</span>
                        </Modal>
                    </>
                );
            },
        },
    ];

    // Cacher la colonne "Propriétaire" si l'utilisateur est "dealership" ou "company"
    if (currentUser && !["dealership", "company"].includes(currentUser.role.value)) {
        columns.splice(6, 0, {
            id: "owner",
            header: "Propriétaire",
            cell: ({ row }) => {
                const firstName = row.original.companyOrDealerShipFirstName;
                const lastName = row.original.companyOrDealerShipLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        });
    }

    return columns;
}
