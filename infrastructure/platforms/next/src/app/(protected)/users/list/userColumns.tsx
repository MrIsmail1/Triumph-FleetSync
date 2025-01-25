// columns.ts
"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  HiArrowsUpDown,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
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
import { moveColumnsDown, moveColumnsUp } from "@/lib/utils";
import { User } from "@/types/AuthResponses";
import { Dialog } from "@radix-ui/react-dialog";

interface BuildColumnsProps {
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

/**
 * Returns an array of ColumnDef<User> configured with “Edit” & “Delete” actions.
 */
export function buildUserColumns({ onEdit, onDelete }: BuildColumnsProps) {
  const columns: ColumnDef<User>[] = [
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
          Nom
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => {
        const { firstName, lastName } = row.original;
        const fullName = `${firstName?.value ?? ""} ${
          lastName?.value ?? ""
        }`.trim();
        return <div className="font-medium text-left">{fullName}</div>;
      },
      footer: ({ column, table }) => (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          />
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          />
        </div>
      ),
    },
    {
      id: "email",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          E-mail
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => row.original.email.value,
      footer: ({ column, table }) => (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          />
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          />
        </div>
      ),
    },
    {
      id: "role",
      header: ({ column }) => (
        <div className="flex justify-between py-2 text-left">
          Rôle
          <HiArrowsUpDown
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      ),
      cell: ({ row }) => {
        return <div>{row.original.role.value}</div>;
      },
      footer: ({ column, table }) => (
        <div className="flex flex-row gap-4">
          <HiOutlineArrowLeftCircle
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          />
          <HiOutlineArrowRightCircle
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          />
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <div className="py-2 text-left">Actions</div>,
      cell: ({ row }) => {
        const user = row.original;
        return (
          <Modal
            title="Modifier l'utilisateur"
            description="Modifier les informations de l'utilisateur. Assurez-vous de sauvegarder les modifications."
            cancelText="Annuler"
            confirmText="Sauvegarder"
            data={user}
            onConfirm={() => {
              onEdit(user);
            }}
          ></Modal>
        );
      },
    },
  ];

  return columns;
}
