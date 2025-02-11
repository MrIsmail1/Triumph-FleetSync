"use client";

import { DataTable } from "@/components/common/DataTable";
import { maintenancesList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildMaintenanceColumns } from "./maintenanceColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import MaintenanceForm from "@/components/maintenance/MaintenanceForm";

export default function MaintenanceListPage() {
    const { data: maintenances } = useQuery({
        queryKey: ["maintenances"],
        queryFn: maintenancesList,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    const columns = buildMaintenanceColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des maintenances</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Créer une maintenance</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={maintenances ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="motorbikeId"
                    globalFilterPlaceholder="Recherche par moto..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer une nouvelle maintenance"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour créer une nouvelle maintenance."
            >
                <MaintenanceForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
