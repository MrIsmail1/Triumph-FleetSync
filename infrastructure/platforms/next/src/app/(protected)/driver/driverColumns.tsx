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
import { Driver } from "@/types/DriverResponses";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { driverDelete } from "@/lib/api";
import EditDriverForm from "@/components/driver/EditDriverForm";
import Link from "next/link";

export function buildDriverColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

    const queryClient = useQueryClient();

    // Mutation pour supprimer un conducteur
    const { mutate: deleteDriver, isLoading } = useMutation({
        mutationFn: driverDelete,
        onSuccess: () => {
            queryClient.invalidateQueries(["drivers"]);
            setDeleteModalOpen(false);
            setSelectedDriver(null);
        },
    });

    const handleDeleteClick = (driver: Driver) => {
        setSelectedDriver(driver);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (driver: Driver) => {
        setSelectedDriver(driver);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedDriver) {
            return;
        }
        deleteDriver(selectedDriver.identifier);
    };

    const columns: ColumnDef<Driver>[] = [
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
            id: "firstName",
            header: "Prénom",
            cell: ({ row }) => row.original.firstName?.value ?? "Non renseigné",
        },
        {
            id: "lastName",
            header: "Nom",
            cell: ({ row }) => row.original.lastName?.value ?? "Non renseigné",
        },
        {
            id: "email",
            header: "Email",
            cell: ({ row }) => row.original.email?.value ?? "Non renseigné",
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
                const driver = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm">
                                    <Link href={`/driver/${driver.identifier}`}>Voir</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(driver)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(driver)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Modal d'édition */}
                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier le conducteur"
                            cancelText="Annuler"
                            description="Modifiez les informations du conducteur."
                        >
                            {selectedDriver && (
                                <EditDriverForm driver={selectedDriver} setOpen={setEditModalOpen} />
                            )}
                        </Modal>

                        {/* Modal de confirmation pour suppression */}
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer le conducteur"
                            description="Êtes-vous sûr de vouloir supprimer ce conducteur ? Cette action est irréversible."
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
