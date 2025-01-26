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

  const columns = buildUserColumns();
  return (
    <>
      <div className="flex justify-start items-center mb-4">
        <h1 className="text-2xl font-semibold">Liste des utilisateurs</h1>
      </div>
      <div className="p-2 border rounded-md">
        <DataTable
          columns={columns}
          data={users ?? []}
          showColumnSelection
          initialPageSize={10}
          globalFilterColumnId="name"
          globalFilterPlaceholder="Recherche par nom..."
        />
      </div>
    </>
  );
}
