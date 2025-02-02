"use client";

import { Driver } from "@/types/DriverResponses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DriverDetails({ driver }: { driver: Driver }) {
    return (
        <Card className="max-w-md mx-auto mt-10 shadow-md">
            <CardHeader>
                <CardTitle>Informations du conducteur</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>Prénom :</strong> {driver.firstName?.value || "Non renseigné"}</p>
                <p><strong>Nom :</strong> {driver.lastName?.value || "Non renseigné"}</p>
                <p><strong>Email :</strong> {driver.email?.value || "Non renseigné"}</p>
                <p><strong>Date de création :</strong> {new Date(driver.createdAt).toLocaleDateString("fr-FR")}</p>
                <p><strong>Dernière modification :</strong> {new Date(driver.updatedAt).toLocaleDateString("fr-FR")}</p>

                {driver.motorbikes?.length > 0 && (
                    <>
                        <h3 className="font-semibold">Motos assignées :</h3>
                        <ul>
                            {driver.motorbikes?.map((motorbike) => (
                                <li key={motorbike.identifier}>
                                    {motorbike.licensePlate?.value || "Sans plaque"} - {motorbike.modelMotorbikeName || "Modèle inconnu"}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
