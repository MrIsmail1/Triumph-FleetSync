"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
    motorbikeGetOne,
    motorbikeIncidentsListByMotorbikeId,
    triesListByMotorbikeId
} from "@/lib/api";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MotorbikeDetails from "@/components/motorbike/MotorbikeDetail";

export default function MotorbikePage() {
    const params = useParams();
    const motorbikeId = params.motorbikeId as string;

    if (!motorbikeId) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Aucune moto spécifiée.</AlertDescription>
            </Alert>
        );
    }

    // Récupérer les informations de la moto
    const { data: motorbike, isLoading, isError } = useQuery({
        queryKey: ["motorbike", motorbikeId],
        queryFn: () => motorbikeGetOne(motorbikeId),
    });

    // Récupérer l'historique des essais de la moto
    const { data: motorbikeHistory, isLoading: isLoadingHistory, isError: isErrorHistory } = useQuery({
        queryKey: ["motorbikeHistorical", motorbikeId],
        queryFn: () => triesListByMotorbikeId(motorbikeId),
    });

    // Récupérer les incidents liés à la moto
    const { data: motorbikeIncidents, isLoading: isLoadingIncidents, isError: isErrorIncidents } = useQuery({
        queryKey: ["motorbikeIncidents", motorbikeId],
        queryFn: () => motorbikeIncidentsListByMotorbikeId(motorbikeId),
    });

    if (isError || !motorbike) {
        return (
            <Alert variant="destructive">
                <AlertDescription>Impossible de charger la moto.</AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="p-6">
            <MotorbikeDetails motorbike={motorbike} />

            <h2 className="text-xl font-bold mt-6">Historique des essais</h2>
            {isLoadingHistory ? (
                <p>Chargement de l'historique...</p>
            ) : isErrorHistory || !motorbikeHistory?.length ? (
                <Alert variant="destructive">
                    <AlertDescription>Aucun historique trouvé.</AlertDescription>
                </Alert>
            ) : (
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Nom du conducteur</TableHead>
                            <TableHead>Immatriculation</TableHead>
                            <TableHead>Couleur de la moto</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {motorbikeHistory.map((history) => (
                            <TableRow key={history.identifier}>
                                <TableCell>{new Date(history.createdAt).toLocaleDateString("fr-FR")}</TableCell>
                                <TableCell>{history.driverFirstName} {history.driverLastName}</TableCell>
                                <TableCell>{history.licencePlateMotorbike || "Non renseigné"}</TableCell>
                                <TableCell>{history.colorMotorbike || "Non renseigné"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            <h2 className="text-xl font-bold mt-6">Incidents liés à la moto</h2>
            {isLoadingIncidents ? (
                <p>Chargement des incidents...</p>
            ) : isErrorIncidents || !motorbikeIncidents?.length ? (
                <Alert variant="destructive">
                    <AlertDescription>Aucun incident enregistré pour cette moto.</AlertDescription>
                </Alert>
            ) : (
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Type d'incident</TableHead>
                            <TableHead>Commentaire</TableHead>
                            <TableHead>Conducteur</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {motorbikeIncidents.map((incident) => (
                            <TableRow key={incident.identifier}>
                                <TableCell>{new Date(incident.createdAt).toLocaleDateString("fr-FR")}</TableCell>
                                <TableCell>{incident.incidentType}</TableCell>
                                <TableCell>{incident.comment || "Aucun commentaire"}</TableCell>
                                <TableCell>{incident.driverFirstName} {incident.driverLastName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
