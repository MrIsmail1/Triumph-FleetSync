"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser, motorbikesList } from "@/lib/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import {MotorbikeTable} from "./motorbikeColumns";
import MotorbikeForm from "@/components/motorbike/motorbikeForm";

export default function MotorbikeListPage() {
    const { data: motorbikes } = useQuery({
        queryKey: ["motorbikes"],
        queryFn: motorbikesList,
    });

    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des motos</h1>
                {["admin"].includes(currentUser?.role.value) && (
                    <Button onClick={() => setCreateModalOpen(true)}>Créer une moto</Button>
                )}
            </div>

            <div className="p-2 border rounded-md">
                <MotorbikeTable motorbikes={motorbikes ?? []} />
            </div>

            <Modal
                open={isCreateModalOpen}
                setOpen={setCreateModalOpen}
                title="Créer une nouvelle moto"
                cancelText="Annuler"
                description="Remplissez le formulaire ci-dessous pour ajouter une nouvelle moto."
            >
                <MotorbikeForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
