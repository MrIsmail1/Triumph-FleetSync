"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparePartResponse } from "@/types/SparePart";

export default function SparePartDetails({
  sparePart,
}: {
  sparePart: SparePartResponse[];
}) {
  return (
    <div className="flex">
      {sparePart.map((part) => (
        <Card key={part.identifier} className="shadow-md w-full">
          <CardHeader>
            <CardTitle>Informations sur la pièce détachée</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Nom de la pièce:</strong>{" "}
              {part.name?.value || "Non renseigné"}
            </p>
            <p>
              <strong>Numéro de pièce:</strong>{" "}
              {part.partNumber?.value || "Non renseigné"}
            </p>
            <p>
              <strong>Marque:</strong> {part.brand || "Non renseigné"}
            </p>
            <p>
              <strong>Quantité en stock:</strong>{" "}
              {part.stockQuantity?.value ?? "Non renseigné"}
            </p>
            <p>
              <strong>Seuil de réapprovisionnement:</strong>{" "}
              {part.reorderThreshold?.value ?? "Non renseigné"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
