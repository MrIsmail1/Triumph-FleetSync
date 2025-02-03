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
import { Fleet } from "@/types/FleetResponses";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fleetDelete } from "@/lib/api";
import EditFleetForm from "@/components/fleet/EditFleetForm";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/api"; // Assurez-vous que cette fonction récupère l'utilisateur

export function buildFleetColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedFleet, setSelectedFleet] = useState<Fleet | null>(null);

    const queryClient = useQueryClient();

    // Récupérer l'utilisateur et son rôle
    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    // Mutation pour supprimer une flotte
    const { mutate: deleteFleet, isLoading } = useMutation({
        mutationFn: fleetDelete,
        onSuccess: () => {
            queryClient.invalidateQueries(["fleets"]);
            setDeleteModalOpen(false);
            setSelectedFleet(null);
        },
    });

    const handleDeleteClick = (fleet: Fleet) => {
        setSelectedFleet(fleet);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (fleet: Fleet) => {
        setSelectedFleet(fleet);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedFleet) {
            return;
        }
        deleteFleet(selectedFleet.identifier);
    };

    // Définition des colonnes de base
    let columns: ColumnDef<Fleet>[] = [
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
            id: "name",
            header: "Nom",
            cell: ({ row }) => row.original.name?.value ?? "Non renseigné",
        },
        {
            id: "createdAt",
            header: "Date de création",
            cell: ({ row }) =>
                new Date(row.original.createdAt).toLocaleDateString("fr-FR"),
        },
        {
            id: "updatedAt",
            header: "Dernière modification",
            cell: ({ row }) =>
                new Date(row.original.updatedAt).toLocaleDateString("fr-FR"),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const fleet = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(fleet)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(fleet)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Modal d'édition */}
                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier la flotte"
                            cancelText="Annuler"
                            description="Modifiez les informations de la flotte."
                        >
                            {selectedFleet && (
                                <EditFleetForm fleet={selectedFleet} setOpen={setEditModalOpen} />
                            )}
                        </Modal>

                        {/* Modal de confirmation pour suppression */}
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer la flotte"
                            description="Êtes-vous sûr de vouloir supprimer cette flotte ? Cette action est irréversible."
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

    // Ajouter la colonne "Entreprise / Concessionnaire" seulement si l'utilisateur n'est pas "dealership" ou "company"
    if (currentUser && !["dealership", "company"].includes(currentUser.role.value)) {
        columns.splice(1, 0, {
            id: "companyOrDealerShip",
            header: "Entreprise / Concessionnaire",
            cell: ({ row }) => {
                const firstName = row.original.userFirstName;
                const lastName = row.original.userLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        });
    }

    return columns;
}
