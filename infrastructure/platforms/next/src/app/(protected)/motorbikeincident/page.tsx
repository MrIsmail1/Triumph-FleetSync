"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser, motorbikeIncidentsList } from "@/lib/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/Modal";
import React from "react";
import {MotorbikeIncidentTable} from "@/app/(protected)/motorbikeincident/motorbikeIncidentColumns";
import MotorbikeIncidentForm from "@/components/motorbikeIncident/motorbikeIncidentForm";

export default function MotorbikeIncidentListPage() {
    const { data: incidents } = useQuery({
        queryKey: ["motorbikeIncidents"],
        queryFn: motorbikeIncidentsList,
    });

    const { data: currentUser } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Liste des incidents</h1>
                {["admin", "dealership", "company"].includes(currentUser?.role?.value ?? "") && (
                    <Button onClick={() => setCreateModalOpen(true)}>Créer un incident</Button>
                )}
            </div>

            <div className="p-2 border rounded-md">
                <MotorbikeIncidentTable incidents={incidents ?? []} />
            </div>

            <Modal open={isCreateModalOpen} setOpen={setCreateModalOpen} title="Créer un incident">
                <MotorbikeIncidentForm setOpen={setCreateModalOpen} />
            </Modal>
        </>
    );
}
