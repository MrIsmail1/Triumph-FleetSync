"use client";

import { Motorbike } from "@/types/MotorbikeResponses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MotorbikeDetails({ motorbike }: { motorbike: Motorbike }) {
    return (
        <Card className="max-w-md mx-auto mt-10 shadow-md">
            <CardHeader>
                <CardTitle>Informations de la moto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>Immatriculation :</strong> {motorbike.licensePlate.value || "Non renseigné"}</p>
                <p><strong>VIN (Numéro d'identification) :</strong> {motorbike.vehicleIdentificationNumber.value || "Non renseigné"}</p>
                <p><strong>Couleur :</strong> {motorbike.color || "Non renseigné"}</p>
                <p><strong>Kilométrage :</strong> {motorbike.mileage ? `${motorbike.mileage} km` : "Non renseigné"}</p>
                <p><strong>Statut :</strong> {motorbike.status.value || "Non renseigné"}</p>
                <p><strong>Date d'ajout :</strong> {new Date(motorbike.createdAt).toLocaleDateString("fr-FR")}</p>
                <p><strong>Dernière modification :</strong> {new Date(motorbike.updatedAt).toLocaleDateString("fr-FR")}</p>

                {motorbike.driver && (
                    <>
                        <h3 className="font-semibold">Conducteur assigné :</h3>
                        <p>{motorbike.driver.firstName?.value} {motorbike.driver.lastName?.value || "Non renseigné"}</p>
                    </>
                )}

                {motorbike.companyOrDealerShip && (
                    <>
                        <h3 className="font-semibold">Concessionnaire/Entreprise :</h3>
                        <p>{motorbike.companyOrDealerShip.firstName?.value} {motorbike.companyOrDealerShip.lastName?.value || "Non renseigné"}</p>
                    </>
                )}

                {motorbike.fleet && (
                    <>
                        <h3 className="font-semibold">Flotte :</h3>
                        <p>{motorbike.fleet.name || "Non renseigné"}</p>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
