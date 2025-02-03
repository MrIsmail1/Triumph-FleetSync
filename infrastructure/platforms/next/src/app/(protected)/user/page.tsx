"use client";
import {DataTable} from "@/components/common/DataTable";
import {usersList} from "@/lib/api";
import {useQuery} from "@tanstack/react-query";
import {buildUserColumns} from "./userColumns";

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
