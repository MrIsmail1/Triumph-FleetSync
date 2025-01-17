"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/toast";

export default function PlanMaintenanceForm() {
  const [bikeData, setBikeData] = useState({
    model: "",
    kilometrage: "",
    lastMaintenance: "",
  });
  const [result, setResult] = useState<{
    nextKilometers: number;
    nextDate: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBikeData({ ...bikeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/maintenance/plan`,
        {
          bike: {
            model: { value: bikeData.model },
            kilometrage: parseInt(bikeData.kilometrage, 10),
            lastMaintenace: bikeData.lastMaintenance || null,
          },
        }
      );

      setResult(response.data);
      toast({
        title: "Success",
        description: "Maintenance planifiée avec succès.",
      });
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Une erreur est survenue.";
      toast({
        title: "Erreur",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg p-4">
      <h1 className="text-2xl font-bold mb-4">Planification des Entretiens</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="model" className="block text-sm font-medium">
            Modèle de Moto
          </label>
          <Input
            id="model"
            name="model"
            type="text"
            placeholder="Ex. Tiger Sport 660"
            value={bikeData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="kilometrage" className="block text-sm font-medium">
            Kilométrage
          </label>
          <Input
            id="kilometrage"
            name="kilometrage"
            type="number"
            placeholder="Ex. 10000"
            value={bikeData.kilometrage}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastMaintenance" className="block text-sm font-medium">
            Dernier entretien (optionnel)
          </label>
          <Input
            id="lastMaintenance"
            name="lastMaintenance"
            type="date"
            value={bikeData.lastMaintenance}
            onChange={handleChange}
          />
        </div>

        <Separator className="my-4" />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Chargement..." : "Planifier l'entretien"}
        </Button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded-lg bg-neutral-50 dark:bg-neutral-800">
          <h2 className="text-lg font-medium">Résultats</h2>
          <p className="mt-2">
            <strong>Prochain kilométrage :</strong> {result.nextKilometers} km
          </p>
          <p>
            <strong>Prochaine date :</strong>{" "}
            {new Date(result.nextDate).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
