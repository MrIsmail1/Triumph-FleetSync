"use client";

import { DataTable } from "@/components/common/DataTable";
import { modelMotorbikesList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildModelMotorbikeColumns } from "./modelMotorbikeColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import ModelMotorbikeForm from "@/components/modelMotorbike/modelMotorbikeForm";

export default function ModelMotorbikeListPage() {
    const { data: modelMotorbikes } = useQuery({
        queryKey: ["modelMotorbikes"],
        queryFn: modelMotorbikesList,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const columns = buildModelMotorbikeColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des modèles de motos</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Créer un modèle</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={modelMotorbikes ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="name"
                    globalFilterPlaceholder="Recherche par nom..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer un modèle de moto"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour créer un nouveau modèle de moto."
            >
                <ModelMotorbikeForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
