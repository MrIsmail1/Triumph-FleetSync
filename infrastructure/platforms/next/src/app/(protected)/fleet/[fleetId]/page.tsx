"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {fleetGetOne, motorbikesListByFleetId} from "@/lib/api";
import FleetDetails from "@/components/fleet/FleetDetails";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MotorbikeTable } from "@/app/(protected)/motorbike/motorbikeColumns";

export default function FleetPage() {
    const params = useParams();
    const fleetId = params.fleetId as string;

    if (!fleetId) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Aucune flotte spécifiée.</AlertDescription>
            </Alert>
        );
    }

    const { data: fleet, isLoading: isLoadingFleet, isError: isErrorFleet } = useQuery({
        queryKey: ["fleet", fleetId],
        queryFn: () => fleetGetOne(fleetId),
    });

    const { data: motorbikesFleet, isLoading: isLoadingMotorbikes, isError: isErrorMotorbikes } = useQuery({
        queryKey: ["motorbikesFleet", fleetId],
        queryFn: () => motorbikesListByFleetId(fleetId),
    });

    if (isErrorFleet || !fleet) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Impossible de charger la flotte.</AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="p-6">
            <FleetDetails fleet={fleet} />

            <h2 className="text-xl font-bold mt-6">Motos associées à cette flotte</h2>
            {isLoadingMotorbikes ? <p>Chargement...</p> : <MotorbikeTable motorbikes={motorbikesFleet ?? []} />}
        </div>
    );
}
