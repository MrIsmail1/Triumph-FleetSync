"use client";
import { DataTable } from "@/components/common/DataTable";
import { Modal } from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import { usersList } from "@/lib/api";
import { User } from "@/types/AuthResponses";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { buildUserColumns } from "./userColumns";

export default function UsersListPage() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: usersList,
  });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function handleEdit(user: User) {
    setSelectedUser(user);
  }

  function handleDelete(user: User) {
    setSelectedUser(user);
  }

  // Build columns with the above callbacks
  const columns = buildUserColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Liste des utilisateurs</h1>
        <Button>Ajouter un utilisateur</Button>
      </div>
      <div className="p-2 border rounded-md">
        <DataTable
          columns={columns}
          data={users ?? []}
          showColumnSelection
          initialPageSize={10}
          globalFilterColumnId="name"
          globalFilterPlaceholder="Recherche par nom......"
        />
      </div>
    </>
  );
}
