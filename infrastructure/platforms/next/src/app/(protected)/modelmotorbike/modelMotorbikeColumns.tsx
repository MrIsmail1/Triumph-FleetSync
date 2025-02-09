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
import { ModelMotorbike } from "@/types/ModelMotorbikeResponses";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { modelMotorbikeDelete } from "@/lib/api";
import EditModelMotorbikeForm from "@/components/modelMotorbike/EditModelMotorbikeForm";


export function buildModelMotorbikeColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedModelMotorbike, setSelectedModelMotorbike] = useState<ModelMotorbike | null>(null);

    const queryClient = useQueryClient();

    const { mutate: deleteModelMotorbike, isPending } = useMutation({
        mutationFn: modelMotorbikeDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["modelMotorbikes"] });
            setDeleteModalOpen(false);
            setSelectedModelMotorbike(null);
        },
        onError: (error) => {
            console.error("Erreur lors de la suppression :", error);
        },
    });

    const handleDeleteClick = (modelMotorbike: ModelMotorbike) => {
        setSelectedModelMotorbike(modelMotorbike);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (modelMotorbike: ModelMotorbike) => {
        setSelectedModelMotorbike(modelMotorbike);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedModelMotorbike) {
            console.error("Erreur : Aucun modèle sélectionné.");
            return;
        }
        deleteModelMotorbike(selectedModelMotorbike.identifier);
    };

    const columns: ColumnDef<ModelMotorbike>[] = [
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
            id: "brand",
            header: "Marque",
            cell: ({ row }) => row.original.brand?.value ?? "Non renseigné",
        },
        {
            id: "maintenanceIntervalKm",
            header: "Intervalle Maintenance (km)",
            cell: ({ row }) => row.original.maintenanceIntervalKm ?? "Non renseigné",
        },
        {
            id: "maintenanceIntervalTimeMonths",
            header: "Intervalle Maintenance (mois)",
            cell: ({ row }) => row.original.maintenanceIntervalTimeMonths ?? "Non renseigné",
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
                const modelMotorbike = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(modelMotorbike)}>
                                    Modifier
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(modelMotorbike)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier le modèle de moto"
                            cancelText="Annuler"
                            description="Modifiez les informations du modèle de moto."
                        >
                            {selectedModelMotorbike && (
                                <EditModelMotorbikeForm modelMotorbike={selectedModelMotorbike} setOpen={setEditModalOpen} />
                            )}
                        </Modal>

                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer le modèle de moto"
                            description="Êtes-vous sûr de vouloir supprimer ce modèle de moto ? Cette action est irréversible."
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
