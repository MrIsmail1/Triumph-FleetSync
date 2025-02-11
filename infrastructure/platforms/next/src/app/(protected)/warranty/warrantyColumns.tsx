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
import { Warranty } from "@/types/WarrantyReponses";
import React, { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { warrantyDelete, getUser, motorbikeGetOne } from "@/lib/api";
import EditWarrantyForm from "@/components/warranty/EditWarrantyForm";

export function buildWarrantyColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedWarranty, setSelectedWarranty] = useState<Warranty | null>(null);
    const queryClient = useQueryClient();

    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const { mutate: deleteWarranty, isLoading } = useMutation({
        mutationFn: warrantyDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["warranties"] });
            setDeleteModalOpen(false);
            setSelectedWarranty(null);
        },
    });

    const handleDeleteClick = (warranty: Warranty) => {
        setSelectedWarranty(warranty);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (warranty: Warranty) => {
        setSelectedWarranty(warranty);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedWarranty) {
            console.warn("Aucune garantie sélectionnée pour suppression !");
            return;
        }
        deleteWarranty(selectedWarranty.identifier);
    };

    let columns: ColumnDef<Warranty>[] = [
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
            id: "providerName",
            header: "Fournisseur",
            cell: ({ row }) => row.original.providerName.value ?? "Non renseigné",
        },
        {
            id: "validFrom",
            header: "Début",
            cell: ({ row }) =>
                new Date(row.original.validFrom).toLocaleDateString("fr-FR"),
        },
        {
            id: "validUntil",
            header: "Fin",
            cell: ({ row }) =>
                new Date(row.original.validUntil).toLocaleDateString("fr-FR"),
        },
        {
            id: "motorbike",
            header: "Moto",
            cell: ({ row }) => {
                const motorbikeId = row.original.motorbikeId;
                
                // Utilisation de React Query pour récupérer la moto associée
                const { data: motorbike, isLoading } = useQuery({
                    queryKey: ["motorbike", motorbikeId],
                    queryFn: () => motorbikeGetOne(motorbikeId),
                    enabled: !!motorbikeId,
                });

                if (isLoading) return "Chargement...";
                return motorbike?.licensePlate?.value ?? "Non renseigné";
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const warranty = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(warranty)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(warranty)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Modal d'édition */}
                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier la garantie"
                            cancelText="Annuler"
                            description="Modifiez les informations de la garantie."
                        >
                            {selectedWarranty && (
                                <EditWarrantyForm warranty={selectedWarranty} setOpen={setEditModalOpen} />
                            )}
                        </Modal>

                        {/* Modal de confirmation pour suppression */}
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer la garantie"
                            description="Êtes-vous sûr de vouloir supprimer cette garantie ? Cette action est irréversible."
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
