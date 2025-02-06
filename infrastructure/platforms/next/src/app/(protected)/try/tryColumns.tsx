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
import { Try } from "@/types/TryResponses";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, tryDelete } from "@/lib/api";
import EditTryForm from "@/components/try/EditTryForm";
import { DataTable } from "@/components/common/DataTable";

export function TryTable({ tries }: { tries: Try[] }) {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedTry, setSelectedTry] = useState<Try | null>(null);

    const queryClient = useQueryClient();

    // Récupérer l'utilisateur et son rôle
    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    // Mutation pour supprimer un essai
    const { mutate: deleteTry, isLoading } = useMutation({
        mutationFn: tryDelete,
        onSuccess: () => {
            queryClient.invalidateQueries(["tries"]);
            setDeleteModalOpen(false);
            setSelectedTry(null);
        },
    });

    const handleDeleteClick = (tryItem: Try) => {
        setSelectedTry(tryItem);
        setDeleteModalOpen(true);
    };

    const handleEditClick = (tryItem: Try) => {
        setSelectedTry(tryItem);
        setEditModalOpen(true);
    };

    const confirmDelete = () => {
        if (!selectedTry) return;
        deleteTry(selectedTry.identifier);
    };

    const columns: ColumnDef<Try>[] = [
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
            id: "dealership",
            header: "Concessionnaire",
            cell: ({ row }) => {
                const firstName = row.original.dealershipFirstName;
                const lastName = row.original.dealershipLastName;
                return firstName && lastName ? `${firstName} ${lastName}` : "Non renseigné";
            },
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
            id: "endDate",
            header: "Date de fin",
            cell: ({ row }) => new Date(row.original.endDate).toLocaleDateString("fr-FR"),
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
                const tryItem = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(tryItem)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(tryItem)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier un essai"
                            cancelText="Annuler"
                            description="Modifiez les informations de l'essai."
                        >
                            {selectedTry && currentUser && (
                                <EditTryForm tryItem={selectedTry} setOpen={setEditModalOpen} currentUserRole={currentUser?.role} />
                            )}
                        </Modal>

                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer un essai"
                            description="Êtes-vous sûr de vouloir supprimer cet essai ? Cette action est irréversible."
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

    return (
        <div className="p-2 border rounded-md mt-4">
            <DataTable
                columns={columns}
                data={tries ?? []}
                showColumnSelection
                initialPageSize={10}
                globalFilterColumnId="driver"
                globalFilterPlaceholder="Recherche par conducteur..."
            />
        </div>
    );
}
