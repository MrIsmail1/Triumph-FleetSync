"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {driverGetOne, driverHistoricalList, motorbikeIncidentsListByDriverId} from "@/lib/api";
import DriverDetails from "@/components/driver/DriverDetails";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DriverPage() {
    const params = useParams();
    const driverId = params.driverId as string;

    if (!driverId) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Aucun conducteur spécifié.</AlertDescription>
            </Alert>
        );
    }

    // Récupérer les informations du conducteur
    const { data: driver, isLoading, isError } = useQuery({
        queryKey: ["driver", driverId],
        queryFn: () => driverGetOne(driverId),
    });

    // Récupérer l'historique des essais du conducteur
    const { data: driverHistory, isLoading: isLoadingHistory, isError: isErrorHistory } = useQuery({
        queryKey: ["driverHistorical", driverId],
        queryFn: () => driverHistoricalList(driverId),
    });

    // Récupérer les incidents liés au conducteur
    const { data: driverIncidents, isLoading: isLoadingIncidents, isError: isErrorIncidents } = useQuery({
        queryKey: ["driverIncidents", driverId],
        queryFn: () => motorbikeIncidentsListByDriverId(driverId),
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

            <h2 className="text-xl font-bold mt-6">Historique du conducteur</h2>
            {isLoadingHistory ? (
                <p>Chargement de l'historique...</p>
            ) : isErrorHistory || !driverHistory ? (
                <Alert variant="destructive">
                    <AlertDescription>Aucun historique trouvé.</AlertDescription>
                </Alert>
            ) : (
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Immatriculation</TableHead>
                            <TableHead>Couleur de la moto</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {driverHistory.map((history) => (
                            <TableRow key={history.identifier}>
                                <TableCell>{new Date(history.createdAt).toLocaleDateString("fr-FR")}</TableCell>
                                <TableCell>{history.licencePlateMotorbike || "Non renseigné"}</TableCell>
                                <TableCell>{history.colorMotorbike || "Non renseigné"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            <h2 className="text-xl font-bold mt-6">Incidents liés au conducteur</h2>
            {isLoadingIncidents ? (
                <p>Chargement des incidents...</p>
            ) : isErrorIncidents || !driverIncidents?.length ? (
                <Alert variant="destructive">
                    <AlertDescription>Aucun incident enregistré pour ce conducteur.</AlertDescription>
                </Alert>
            ) : (
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Type d'incident</TableHead>
                            <TableHead>Commentaire</TableHead>
                            <TableHead>Immatriculation</TableHead>
                            <TableHead>Couleur Moto</TableHead>
                            <TableHead>VIN</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {driverIncidents.map((incident) => (
                            <TableRow key={incident.identifier}>
                                <TableCell>{new Date(incident.createdAt).toLocaleDateString("fr-FR")}</TableCell>
                                <TableCell>{incident.incidentType}</TableCell>
                                <TableCell>{incident.comment || "Aucun commentaire"}</TableCell>
                                <TableCell>{incident.licencePlateMotorbike || "Non renseigné"}</TableCell>
                                <TableCell>{incident.colorMotorbike || "Non renseigné"}</TableCell>
                                <TableCell>{incident.vinMotorbike || "Non renseigné"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
