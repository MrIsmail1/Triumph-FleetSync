"use client";

import { DataTable } from "@/components/common/DataTable";
import { fleetsList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildFleetColumns } from "./fleetColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import FleetForm from "@/components/fleet/fleetForm.tsx";

export default function FleetListPage() {
    const { data: fleets } = useQuery({
        queryKey: ["fleets"],
        queryFn: fleetsList,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    const columns = buildFleetColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des flottes</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Créer une flotte</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={fleets ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="name"
                    globalFilterPlaceholder="Recherche par nom..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer une nouvelle flotte"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour créer une nouvelle flotte."
            >
                <FleetForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
