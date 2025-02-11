"use client";
import { maintenanceUpdate } from "@/lib/api";
import { MaintenanceSchema, maintenanceSchema } from "./maintenanceSchema";
import { MaintenanceResponse } from "@/types/MaintenanceResponses";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import React, { useEffect } from "react";

export default function EditMaintenanceForm({
  maintenance,
  setOpen,
}: {
  maintenance: MaintenanceResponse;
  setOpen: (value: boolean) => void;
}) {
  // Removed unused router declaration
  const queryClient = useQueryClient();

  const defaultValues = {
    motorbikeId: maintenance.motorbikeId,
    companyOrDealerShipId: maintenance.companyOrDealerShipId ?? "",
    maintenanceDate: new Date(maintenance.maintenanceDate).toISOString().split("T")[0],
    mileageAtMaintenance: maintenance.mileageAtMaintenance,
    maintenanceType: maintenance.maintenanceType.value,
    maintenanceCost: maintenance.maintenanceCost,
    maintenanceDescription: maintenance.maintenanceDescription?.value ?? "",
  };

  const form = useForm<MaintenanceSchema>({
    resolver: zodResolver(maintenanceSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [maintenance]);

  const { mutateAsync: editMaintenanceAsync, isError, isPending } = useMutation({
    mutationFn: async (data: MaintenanceSchema) => {
      return maintenanceUpdate(maintenance.identifier!, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenances"] });
      setOpen(false);
    },
  });
  const onSubmit = async (data: MaintenanceSchema) => {

    if (Object.keys(form.formState.errors).length > 0) {
      return;
    }

    // Détection des champs modifiés
    const changedFields: Partial<MaintenanceSchema> = {};
    (Object.keys(data) as Array<keyof MaintenanceSchema>).forEach((key) => {
      if (data[key] !== defaultValues[key] || data[key] === null) {
        changedFields[key] = data[key];
      }
    });

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    await editMaintenanceAsync(changedFields);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Une erreur s'est produite lors de la mise à jour de la maintenance.
              </AlertDescription>
            </Alert>
          )}

          {/* Date de maintenance */}
          <FormField
            control={form.control}
            name="maintenanceDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de Maintenance</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Kilométrage */}
          <FormField
            control={form.control}
            name="mileageAtMaintenance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kilométrage</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Kilométrage" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Type de maintenance */}
          <FormField
            control={form.control}
            name="maintenanceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de Maintenance</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Type de maintenance" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Coût */}
          <FormField
            control={form.control}
            name="maintenanceCost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coût</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Coût (€)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="maintenanceDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (Optionnel)</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting || isPending}
          >
            {form.formState.isSubmitting || isPending
              ? "Mise à jour en cours..."
              : "Mettre à jour"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
