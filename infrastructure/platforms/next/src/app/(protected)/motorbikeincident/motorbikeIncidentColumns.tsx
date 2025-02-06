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
import { MotorbikeIncident } from "@/types/MotorbikeIncidentResponses";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, motorbikeIncidentDelete } from "@/lib/api";
import EditMotorbikeIncidentForm from "@/components/motorbikeIncident/EditMotorbikeIncidentForm";
import { DataTable } from "@/components/common/DataTable";

export function MotorbikeIncidentTable({ incidents }: { incidents: MotorbikeIncident[] }) {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedIncident, setSelectedIncident] = useState<MotorbikeIncident | null>(null);

    const queryClient = useQueryClient();

    // Récupérer l'utilisateur et son rôle
    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const { mutate: deleteIncident, isLoading } = useMutation({
        mutationFn: motorbikeIncidentDelete,
        onSuccess: () => {
            queryClient.invalidateQueries(["motorbikeIncidents"]);
            setDeleteModalOpen(false);
            setSelectedIncident(null);
        },
    });

    const handleDeleteClick = (incident: MotorbikeIncident) => {
        setSelectedIncident(incident);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (incident: MotorbikeIncident) => {
        setSelectedIncident(incident);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedIncident) return;
        deleteIncident(selectedIncident.identifier);
    };

    const columns: ColumnDef<MotorbikeIncident>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(value)}
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
            id: "driver",
            header: "Conducteur",
            cell: ({ row }) => {
                const firstName = row.original.driverFirstName;
                const lastName = row.original.driverLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        },
        {
            id: "motorbike",
            header: "Moto",
            cell: ({ row }) => row.original.licencePlateMotorbike ?? "Non renseigné",
        },
        {
            id: "colorMotorbike",
            header: "Couleur Moto",
            cell: ({ row }) => row.original.colorMotorbike ?? "Non renseigné",
        },
        {
            id: "vinMotorbike",
            header: "VIN Moto",
            cell: ({ row }) => row.original.vinMotorbike ?? "Non renseigné",
        },

        {
            id: "incidentType",
            header: "Type d'incident",
            cell: ({ row }) => row.original.incidentType,
        },
        {
            id: "comment",
            header: "Commentaire",
            cell: ({ row }) => row.original.comment ?? "Non renseigné",
        },
        {
            id: "createdAt",
            header: "Date de création",
            cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString("fr-FR"),
        },
    ];

    if (currentUser && !["dealership", "company"].includes(currentUser.role.value)) {
        columns.splice(1, 0, {
            id: "companyOrDealerShip",
            header: "Entreprise / Concessionnaire",
            cell: ({ row }) => {
                const firstName = row.original.dealershipFirstName;
                const lastName = row.original.dealershipLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        });
    }

    if (currentUser && ["admin"].includes(currentUser.role.value)) {
        columns.push({
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const incident = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(incident)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(incident)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Modal open={isEditModalOpen} setOpen={setEditModalOpen} title="Modifier un incident">
                            {selectedIncident && <EditMotorbikeIncidentForm incident={selectedIncident} setOpen={setEditModalOpen} />}
                        </Modal>

                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer un incident"
                            description="Êtes-vous sûr de vouloir supprimer cet incident ? Cette action est irréversible."
                            confirmText="Supprimer"
                            cancelText="Annuler"
                            onConfirm={confirmDelete}
                        >
                            <span className="text-red-400">Cette action est irréversible.</span>
                        </Modal>
                    </>
                );
            },
        });
    }

    return (
        <div className="p-2 border rounded-md mt-4">
            <DataTable columns={columns} data={incidents ?? []} showColumnSelection initialPageSize={10} />
        </div>
    );
}
