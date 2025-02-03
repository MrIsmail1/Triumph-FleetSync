"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { driverGetOne } from "@/lib/api";
import DriverDetails from "@/components/driver/DriverDetails";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DriverPage() {
    const params = useParams();  // ✅ Utilisation correcte des paramètres Next.js
    const driverId = params.driverId as string;  // ✅ Extraction propre du driverId

    if (!driverId) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Aucun conducteur spécifié.</AlertDescription>
            </Alert>
        );
    }

    const { data: driver, isLoading, isError } = useQuery({
        queryKey: ["driver", driverId],
        queryFn: () => driverGetOne(driverId),
    });



    if (isError || !driver) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Impossible de charger le conducteur.</AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="p-6">
            <DriverDetails driver={driver} />
        </div>
    );
}
