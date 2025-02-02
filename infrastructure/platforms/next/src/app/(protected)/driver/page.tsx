"use client";

import { DataTable } from "@/components/common/DataTable";
import { driversList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildDriverColumns } from "./driverColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import DriverForm from "@/components/driver/DriverForm";
import React from "react";

export default function DriverListPage() {
    const { data: drivers } = useQuery({
        queryKey: ["drivers"],
        queryFn: driversList,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    const columns = buildDriverColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des conducteurs</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Créer un conducteur</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={drivers ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="lastName"
                    globalFilterPlaceholder="Recherche par nom..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer un nouveau conducteur"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour ajouter un conducteur."
            >
                <DriverForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
