"use client";

import { breakdownUpdate } from "@/lib/api";
import { BreakdownSchema, breakdownSchema } from "./breakdownSchema";
import { BreakdownResponse } from "@/types/BreakdownResponses";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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

export default function EditBreakdownForm({
  breakdown,
  setOpen,
}: {
  breakdown: BreakdownResponse;
  setOpen: (value: boolean) => void;
}) {
  const queryClient = useQueryClient();

  const defaultValues = {
    motorbikeId: breakdown.motorbikeId,
    description: breakdown.description.value,
    actionTaken: breakdown.actionTaken.value,
    resolved: breakdown.resolved,
    resolutionDate: breakdown.resolutionDate ? new Date(breakdown.resolutionDate).toISOString().split("T")[0] : "",
  };

  const form = useForm<BreakdownSchema>({
    resolver: zodResolver(breakdownSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [breakdown]);

  const { mutateAsync: editBreakdownAsync, isError, isPending } = useMutation({
    mutationFn: async (data: BreakdownSchema) => {
      return breakdownUpdate(breakdown.identifier!, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["breakdowns"] });
      setOpen(false);
    },
  });


  const onSubmit = async (data: BreakdownSchema) => {

    if (Object.keys(form.formState.errors).length > 0) {
      return;
    }

    // Détection des champs modifiés
    const changedFields: Partial<BreakdownSchema> = {};
    (Object.keys(data) as Array<keyof BreakdownSchema>).forEach((key) => {
      if (data[key] !== defaultValues[key] || data[key] === null) {
        changedFields[key] = data[key];
      }
    });

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    await editBreakdownAsync(changedFields);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Une erreur s'est produite lors de la mise à jour de la panne.
              </AlertDescription>
            </Alert>
          )}

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Description de la panne" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Action prise */}
          <FormField
            control={form.control}
            name="actionTaken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Action prise</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Action prise" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Résolu */}
          <FormField
            control={form.control}
            name="resolved"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statut</FormLabel>
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date de résolution */}
          <FormField
            control={form.control}
            name="resolutionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de résolution</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
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
