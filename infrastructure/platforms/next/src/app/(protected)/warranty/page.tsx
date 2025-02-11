"use client";

import { DataTable } from "@/components/common/DataTable";
import { warrantiesList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { buildWarrantyColumns } from "./warrantyColumns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import WarrantyForm from "@/components/warranty/WarrantyForm";

export default function WarrantyListPage() {
    const { data: warranties } = useQuery({
        queryKey: ["warranties"],
        queryFn: warrantiesList,
    });
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const columns = buildWarrantyColumns();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des garanties</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Ajouter une garantie</Button>
            </div>

            <div className="p-2 border rounded-md">
                <DataTable
                    columns={columns}
                    data={warranties ?? []}
                    showColumnSelection
                    initialPageSize={10}
                    globalFilterColumnId="providerName"
                    globalFilterPlaceholder="Recherche par fournisseur..."
                />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Ajouter une garantie"
                cancelText="Annuler"
                description="Remplissez le formulaire pour ajouter une nouvelle garantie."
            >
                <WarrantyForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
