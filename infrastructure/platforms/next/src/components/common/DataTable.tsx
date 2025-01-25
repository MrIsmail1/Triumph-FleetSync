"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DataTablePagination } from "../common/PaginationControls";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// --------------------------------
// 1) OPTIONAL: Define a small type
//    for "faceted filter configs".
// --------------------------------
export interface FacetedFilterConfig<TData> {
  /** The columnId we want to filter (must match the accessorKey or id of a ColumnDef). */
  columnId: string;
  /** Label shown in the filter dropdown (e.g., "Location", "Status", etc.). */
  title: string;
  /**
   * A custom function that, given your data and columnId, returns an array of unique dropdown options.
   * Defaults to `getDropDownValues(data, columnId)`.
   */
  getOptions?: (data: TData[], columnId: string) => string[];
}

// --------------------------------
// 2) Define DataTable props
// --------------------------------
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  /** If provided, we show a single text input filter that targets this columnId. */
  globalFilterColumnId?: string;
  /** Placeholder text for the global filter input. */
  globalFilterPlaceholder?: string;

  /** Whether to show a button for toggling column visibility. */
  showColumnSelection?: boolean;

  /** Initial page size, default is 5. */
  initialPageSize?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  globalFilterColumnId, // e.g. "name"
  globalFilterPlaceholder = "Filter...",
  showColumnSelection = false,
  initialPageSize = 5,
}: DataTableProps<TData, TValue>) {
  // --------------------------------
  // React Table State
  // --------------------------------
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

  // --------------------------------
  // Build the TanStack Table
  // --------------------------------
  const table = useReactTable({
    data,
    columns,

    // Row model
    getCoreRowModel: getCoreRowModel(),

    // Sorting
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnOrder,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    // Filters
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedRowModel: getFacetedRowModel(),

    // Column Visibility
    onColumnVisibilityChange: setColumnVisibility,

    // Column Order
    onColumnOrderChange: setColumnOrder,

    // Row Selection
    onRowSelectionChange: setRowSelection,

    // Pagination
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: initialPageSize },
    },

    // Example "meta" property
    meta: {
      myOwnMethod: () => {
        console.log("Custom method in table.options.meta.myOwnMethod()");
      },
    },
  });

  // --------------------------------
  // RENDER
  // --------------------------------
  return (
    <div>
      {/* Top toolbar with filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          {/* GLOBAL TEXT FILTER (optional) */}
          {globalFilterColumnId && (
            <Input
              placeholder={globalFilterPlaceholder}
              value={
                (table
                  .getColumn(globalFilterColumnId)
                  ?.getFilterValue() as string) ?? ""
              }
              onChange={(e) =>
                table
                  .getColumn(globalFilterColumnId)
                  ?.setFilterValue(e.target.value)
              }
              className="max-w-sm"
            />
          )}
        </div>

        {/* Optional: Show a "Select columns" button to toggle column visibility */}
        {showColumnSelection && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Selection des colonnes</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                // Show only columns that can be hidden
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* The main table */}
      <div className="border rounded-md">
        <Table>
          {/* Header */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          {/* Body */}
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Pas de résultats trouvés.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          {/* Footer (for column footers) */}
          <TableFooter>
            {table.getFooterGroups().map((footerGroup) => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end pt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
