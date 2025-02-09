"use client";

import { Modal } from "@/components/common/Modal";
import CreatePartPurchaseForm from "@/components/partPurchase/CreatePartPurchaseForm";
import SparePartDetails from "@/components/sparePart/SparePartDetails";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";

import EditPartPurchaseForm from "@/components/partPurchase/EditPartPuchaseForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { purchasePartHistoryList, sparePartsList } from "@/lib/api";
import { PartPurchaseResponse } from "@/types/PartPurchase";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SparePartPage() {
  const params = useParams();
  const sparePartId = params.id as string;
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedPartPurchase, setSelectedPartPurchase] =
    useState<PartPurchaseResponse | null>(null);

  if (!sparePartId) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Aucune pièce détachée spécifiée.</AlertDescription>
      </Alert>
    );
  }

  // Récupérer les informations du conducteur
  const {
    data: sparePart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["sparePart", { id: sparePartId }],
    queryFn: () => sparePartsList({ id: sparePartId }),
  });

  // Récupérer l'historique d'achat de la pièce détachée
  const {
    data: purchasePartHistory,
    isLoading: isLoadingHistory,
    isError: isErrorHistory,
  } = useQuery({
    queryKey: ["purchaseHistory"],
    queryFn: () => purchasePartHistoryList({ id: sparePartId }),
  });

  if (isError || !sparePart) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Impossible de charger les informations de la pièce détachée.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-6">
      <div className="flex w-full space-x-3">
        <SparePartDetails sparePart={sparePart} />

        <div className="w-full">
          <div className="flex justify-between items-center p-2">
            <h2 className="text-xl font-bold space-y-3">Historique d'achat</h2>
            <Button onClick={() => setCreateModalOpen(true)}>
              Ajouter achat
            </Button>
          </div>
          <Modal
            open={createModalOpen}
            setOpen={setCreateModalOpen}
            cancelText="Annuler"
            title="Ajouter un achat de pièce détachée"
            description="Veuillez remplir les informations nécessaires pour ajouter un achat de pièce détachée."
          >
            <CreatePartPurchaseForm
              setOpen={setCreateModalOpen}
              partId={sparePartId}
            />
          </Modal>
          {isLoadingHistory ? (
            <p>Chargement de l'historique...</p>
          ) : isErrorHistory || !purchasePartHistory?.length ? (
            <Alert variant="destructive">
              <AlertDescription>Aucun historique trouvé.</AlertDescription>
            </Alert>
          ) : (
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead>Date d'achat</TableHead>
                  <TableHead>Quantité</TableHead>
                  <TableHead>Prix unitaire</TableHead>
                  <TableHead>Prix total</TableHead>
                  <TableHead>status</TableHead>
                  <TableHead>Date de récepetion </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchasePartHistory.map((history) => (
                  <TableRow key={history.identifier}>
                    <TableCell>
                      {new Date(history.orderDate).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell>{history.quantity.value}</TableCell>
                    <TableCell>{history.costPerUnit.value} €</TableCell>
                    <TableCell>{history.totalCost.value} €</TableCell>
                    <TableCell>{history.status}</TableCell>
                    <TableCell>
                      {history.receivedDate
                        ? new Date(history.receivedDate).toLocaleDateString(
                            "fr-FR"
                          )
                        : "Non reçu"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setEditModalOpen(true);
                          setSelectedPartPurchase(history);
                        }}
                      >
                        <FaEdit />
                      </Button>
                      {selectedPartPurchase?.identifier ==
                        history.identifier && (
                        <Modal
                          open={isEditModalOpen}
                          setOpen={setEditModalOpen}
                          title="Modifier l'achat de pièce détachée"
                          cancelText="Annuler"
                          description="Modifiez les informations de l'achat de la pièce. N'oubliez pas de cliquer sur Enregistrer pour valider les modifications."
                        >
                          <EditPartPurchaseForm
                            setOpen={setEditModalOpen}
                            purchase={history}
                          />
                        </Modal>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/*  <h2 className="text-xl font-bold mt-6">Incidents liés au conducteur</h2>
      {isLoadingIncidents ? (
        <p>Chargement des incidents...</p>
      ) : isErrorIncidents || !driverIncidents?.length ? (
        <Alert variant="destructive">
          <AlertDescription>
            Aucun incident enregistré pour ce conducteur.
          </AlertDescription>
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
              <TableRow key={incident.id}>
                <TableCell>
                  {new Date(incident.createdAt).toLocaleDateString("fr-FR")}
                </TableCell>
                <TableCell>{incident.incidentType}</TableCell>
                <TableCell>{incident.comment || "Aucun commentaire"}</TableCell>
                <TableCell>
                  {incident.licencePlateMotorbike || "Non renseigné"}
                </TableCell>
                <TableCell>
                  {incident.colorMotorbike || "Non renseigné"}
                </TableCell>
                <TableCell>
                  {incident.vinMotorbike || "Non renseigné"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )} */}
    </div>
  );
}
