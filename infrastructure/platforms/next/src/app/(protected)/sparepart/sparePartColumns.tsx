"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiMore2Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Modal } from "@/components/common/Modal";
import EditSparePartForm from "@/components/sparePart/EditSparePartForm";
import { sparePartDelete } from "@/lib/api";
import { moveColumnsDown, moveColumnsUp } from "@/lib/utils";
import { SparePartResponse } from "@/types/SparePart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";

export function buildSparePartColumns() {
  const [selectedSparePart, setSelectedSparePart] =
    useState<SparePartResponse | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync: deleteSparePart } = useMutation({
    mutationFn: sparePartDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spareParts"] });
    },
  });

  const onDelete = (id: string) => {
    deleteSparePart(id);
    setDeleteModalOpen(false);
  };

  const columns: ColumnDef<SparePartResponse>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: boolean) =>
            table.toggleAllPageRowsSelected(value)
          }
          aria-label="Tout sélectionner"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: boolean) => row.toggleSelected(value)}
          aria-label="Sélectionner la ligne"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "name",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          Nom de la pièce
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="font-medium text-left">{row.original.name.value}</div>
      ),
    },
    {
      id: "partNumber",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          Numéro de pièce
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => row.original.partNumber.value,
    },
    {
      id: "stockQuantity",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          Quantité en stock
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => row.original.stockQuantity.value,
    },
    {
      id: "reorderThreshold",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          Seuil de réapprovisionnement
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => row.original.reorderThreshold.value,
    },
    {
      id: "actions",
      header: () => <div className="py-2 text-left">Actions</div>,
      cell: ({ row }) => {
        const part = row.original;
        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-8 h-8 p-0">
                  <RiMore2Fill />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="text-sm">
                  <Link href={`/sparepart/${part.identifier}`}>Voir</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedSparePart(part);
                    setEditModalOpen(true);
                  }}
                  className="text-sm"
                >
                  Modifier
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-sm"
                  onClick={() => {
                    setSelectedSparePart(part);
                    setDeleteModalOpen(true);
                  }}
                >
                  Supprimer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {selectedSparePart?.identifier == part.identifier && (
              <Modal
                open={isEditModalOpen}
                setOpen={setEditModalOpen}
                title="Modifier la pièce détachée"
                cancelText="Annuler"
                description="Modifiez les informations de la pièce détachée. N'oubliez pas de cliquer sur Enregistrer pour valider les modifications."
              >
                <EditSparePartForm
                  part={selectedSparePart}
                  setOpen={setEditModalOpen}
                />
              </Modal>
            )}

            {selectedSparePart?.identifier == part.identifier && (
              <Modal
                open={isDeleteModalOpen}
                setOpen={setDeleteModalOpen}
                title="Supprimer la pièce détachée"
                description="Êtes-vous sûr de vouloir supprimer cette pièce détachée ?"
                confirmText="Supprimer"
                cancelText="Annuler"
                onConfirm={() => onDelete(part.identifier)}
              >
                <span className="text-red-400">
                  Cette action est irréversible.
                </span>
              </Modal>
            )}
          </>
        );
      },
    },
  ];

  return columns;
}
