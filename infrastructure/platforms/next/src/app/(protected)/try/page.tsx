"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser, triesList } from "@/lib/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import { TryTable } from "./tryColumns";
import TryForm from "@/components/try/tryForm";

export default function TryListPage() {
    const { data: tries } = useQuery({
        queryKey: ["tries"],
        queryFn: triesList,
    });

    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des essais</h1>
                {["admin", "dealership"].includes(currentUser?.role.value) && (
                    <Button onClick={() => setCreateModalOpen(true)}>Créer un essai</Button>
                )}
            </div>

            <div className="p-2 border rounded-md">
                <TryTable tries={tries ?? []} />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer un nouvel essai"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour ajouter un essai."
            >
                <TryForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
