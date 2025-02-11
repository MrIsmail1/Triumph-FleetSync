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
import { MaintenanceResponse } from "@/types/MaintenanceResponses";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { maintenanceDelete } from "@/lib/api";
import EditMaintenanceForm from "@/components/maintenance/EditMaintenanceForm";
import { useQuery } from "@tanstack/react-query";
import { getUser,motorbikeGetOne } from "@/lib/api";

export function buildMaintenanceColumns() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedMaintenance, setSelectedMaintenance] = useState<Maintenance | null>(null);

    const queryClient = useQueryClient();

    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const { mutate: deleteMaintenance, isLoading } = useMutation({
        mutationFn: maintenanceDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["maintenances"] });
            setDeleteModalOpen(false);
            setSelectedMaintenance(null);
        },
    });

    const handleDeleteClick = (maintenance: MaintenanceResponse) => {
    setSelectedMaintenance(maintenance);
    setDeleteModalOpen(true);
};


    const handleEditClick = (maintenance: MaintenanceResponse) => {
        setSelectedMaintenance(maintenance);
        setEditModalOpen(true);
    };

const confirmDelete = () => {
    if (!selectedMaintenance) {
        console.error("❌ Aucun ID de maintenance sélectionné !");
        return;
    }
    deleteMaintenance(selectedMaintenance.identifier);
};


    let columns: ColumnDef<MaintenanceResponse>[] = [
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
            id: "motorbikeId",
            header: "Moto",
            cell: ({ row }) => {
                const motorbikeId = row.original.motorbikeId;
                
                const { data: motorbike, isLoading } = useQuery({
                    queryKey: ["motorbike", motorbikeId],
                    queryFn: () => motorbikeGetOne(motorbikeId),
                    enabled: !!motorbikeId,
                });

                if (isLoading) return "Chargement...";
                return motorbike?.licensePlate.value ?? "Non renseigné";
            },
        },

    {
        id: "maintenanceDate",
        header: "Date de maintenance",
        cell: ({ row }) =>
            new Date(row.original.maintenanceDate).toLocaleDateString("fr-FR"),
    },
    {
        id: "mileageAtMaintenance",
        header: "Kilométrage",
        cell: ({ row }) => `${row.original.mileageAtMaintenance} km`,
    },
    {
        id: "maintenanceType",
        header: "Type de maintenance",
        cell: ({ row }) => row.original.maintenanceType?.value ?? "Non spécifié",
    },
    {
        id: "maintenanceDescription",
        header: "Description",
        cell: ({ row }) => `${row.original.maintenanceDescription.value} km`,
    },
    {
        id: "maintenanceCost",
        header: "Coût (€)",
        cell: ({ row }) => `${row.original.maintenanceCost} €`,
    },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const maintenance = row.original;
                return (
                    <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-8 h-8 p-0">
                                    <RiMore2Fill />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-sm" onClick={() => handleEditClick(maintenance)}>
                                    Modifier
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-sm text-red-600" onClick={() => handleDeleteClick(maintenance)}>
                                    Supprimer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Modal
                            open={isEditModalOpen}
                            setOpen={setEditModalOpen}
                            title="Modifier la maintenance"
                            cancelText="Annuler"
                            description="Modifiez les informations de la maintenance."
                        >
                            {selectedMaintenance && (
                                <EditMaintenanceForm
                                    key={selectedMaintenance.identifier}
                                    maintenance={selectedMaintenance}
                                    setOpen={setEditModalOpen}
                                />
                            )}

                        </Modal>
                        <Modal
                            open={isDeleteModalOpen}
                            setOpen={setDeleteModalOpen}
                            title="Supprimer la maintenance"
                            description="Êtes-vous sûr de vouloir supprimer cette maintenance ? Cette action est irréversible."
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
