"use client";
import { DataTable } from "@/components/common/DataTable";
import { Modal } from "@/components/common/Modal";
import CreateSparePartForm from "@/components/sparePart/CreateSparePartForm";
import { Button } from "@/components/ui/button";
import { sparePartsList } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { buildSparePartColumns } from "./sparePartColumns";

export default function SparePartsListPage() {
  const { data: spareParts } = useQuery({
    queryKey: ["spareParts", {}],
    queryFn: () => sparePartsList(),
  });
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const columns = buildSparePartColumns();
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Liste des pièces détachées</h1>
        <Button onClick={() => setCreateModalOpen(true)}>Ajouter pièce </Button>
      </div>
      <Modal
        open={createModalOpen}
        setOpen={setCreateModalOpen}
        cancelText="Annuler"
        title="Ajouter une pièce détachée"
        description="Veuillez remplir les informations nécessaires pour ajouter une pièce détachée."
      >
        <CreateSparePartForm setOpen={setCreateModalOpen} />
      </Modal>
      <div className="p-2 border rounded-md">
        <DataTable
          columns={columns}
          data={spareParts ?? []}
          showColumnSelection
          initialPageSize={10}
          globalFilterColumnId="name"
          globalFilterPlaceholder="Recherche par nom..."
        />
      </div>
    </>
  );
}
