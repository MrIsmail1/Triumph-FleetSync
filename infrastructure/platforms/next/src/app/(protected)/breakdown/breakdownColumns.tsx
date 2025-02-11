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
import { BreakdownResponse } from "@/types/BreakdownResponses";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { breakdownDelete } from "@/lib/api";
import EditBreakdownForm from "@/components/breakdown/EditBreakdownForm";

export function buildBreakdownColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedBreakdown, setSelectedBreakdown] = useState<BreakdownResponse | null>(null);
    const queryClient = useQueryClient();

    const { mutate: deleteBreakdown, isLoading } = useMutation({
        mutationFn: breakdownDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["breakdowns"] });
            setDeleteModalOpen(false);
            setSelectedBreakdown(null);
        },
        onError: (error) => {
        },
    });

    const handleDeleteClick = (breakdown: BreakdownResponse) => {
        setSelectedBreakdown(breakdown);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (breakdown: BreakdownResponse) => {
        setSelectedBreakdown(breakdown);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedBreakdown) {
            return;
        }
        deleteBreakdown(selectedBreakdown.identifier);
    };

    const columns: ColumnDef<BreakdownResponse>[] = [
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
            id: "companyOrDealerShip",
            header: "Entreprise / Concessionnaire",
            cell: ({ row }) => {
                const firstName = row.original.companyOrDealerShipUserFirstName;
                const lastName = row.original.companyOrDealerShipuserLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
        },
        {
            id: "description",
            header: "Description",
            cell: ({ row }) => row.original.description?.value ?? "Non renseigné",
        },
        {
            id: "actionTaken",
            header: "Action prise",
            cell: ({ row }) => row.original.actionTaken?.value ?? "Non renseigné",
        },
        {
            id: "resolved",
            header: "Résolue",
            cell: ({ row }) => (row.original.resolved ? "Oui" : "Non"),
        },
        {
            id: "resolutionDate",
            header: "Date de résolution",
            cell: ({ row }) =>
                row.original.resolutionDate
                    ? new Date(row.original.resolutionDate).toLocaleDateString("fr-FR")
                    : "Non résolue",
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
                const breakdown = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(breakdown)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(breakdown)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Modal d'édition */}
                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier la panne"
                            description="Mettez à jour les informations de la panne."
                            cancelText="Annuler"
                        >
                            {selectedBreakdown && (
                                <EditBreakdownForm breakdown={selectedBreakdown} setOpen={setEditModalOpen} />
                            )}
                        </Modal>

                        {/* Modal de confirmation pour suppression */}
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer la panne"
                            description="Êtes-vous sûr de vouloir supprimer cette panne ? Cette action est irréversible."
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

    return columns;
}
