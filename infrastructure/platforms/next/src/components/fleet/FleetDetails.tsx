"use client";

import { Fleet } from "@/types/FleetResponses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FleetDetails({ fleet }: { fleet: Fleet }) {
    return (
        <Card className="max-w-md mx-auto mt-10 shadow-md">
            <CardHeader>
                <CardTitle>Informations de la flotte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>Nom :</strong> {fleet.name.value || "Non renseigné"}</p>
                <p><strong>Date de création :</strong> {new Date(fleet.createdAt).toLocaleDateString("fr-FR")}</p>
                <p><strong>Dernière modification :</strong> {new Date(fleet.updatedAt).toLocaleDateString("fr-FR")}</p>

                {fleet.companyOrDealerShip && (
                    <>
                        <h3 className="font-semibold">Attribuée à :</h3>
                        <p><strong>Nom :</strong> {fleet.companyOrDealerShip.firstName} {fleet.companyOrDealerShip.lastName}</p>
                        <p><strong>Email :</strong> {fleet.companyOrDealerShip.email}</p>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
