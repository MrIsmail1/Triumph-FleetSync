"use client";

import { DataTable } from "@/components/common/DataTable";
import { breakdownsList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildBreakdownColumns } from "./breakdownColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import BreakdownForm from "@/components/breakdown/BreakdownForm";

export default function BreakdownListPage() {
    const { data: breakdowns } = useQuery({
        queryKey: ["breakdowns"],
        queryFn: breakdownsList,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const columns = buildBreakdownColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des pannes</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Ajouter une panne</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={breakdowns ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="description"
                    globalFilterPlaceholder="Recherche par description..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Ajouter une panne"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour ajouter une nouvelle panne."
            >
                <BreakdownForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
