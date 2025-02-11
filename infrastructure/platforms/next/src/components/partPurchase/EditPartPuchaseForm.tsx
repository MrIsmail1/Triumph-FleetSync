"use client";
import { partPurchaseUpdate } from "@/lib/api";
import { PartPurchaseResponse } from "@/types/PartPurchase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Toast } from "../common/Toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PartPurchaseSchema, partPurchaseSchema } from "./partPurchaseSchema";

export default function EditPartPurchaseForm({
  setOpen,
  purchase,
}: {
  setOpen: (value: boolean) => void;
  purchase: PartPurchaseResponse;
}) {
  const successToast = Toast({
    buttonText: "Succès",
    description: "Achat de pièce mis à jour avec succès.",
  });
  const queryClient = useQueryClient();
  const form = useForm<PartPurchaseSchema>({
    resolver: zodResolver(partPurchaseSchema),
    defaultValues: {
      partId: purchase.partId,
      costPerUnit: purchase.costPerUnit.value,
      quantity: purchase.quantity.value,
      totalCost: purchase.totalCost.value,
      orderDate: new Date(purchase.orderDate).toISOString().split("T")[0],
      receivedDate:
        new Date(purchase.receivedDate).toISOString().split("T")[0] ?? "",
      status: purchase.status,
    },
  });

  const {
    mutateAsync: updatePartPurchase,
    isError,
    isPending,
  } = useMutation({
    mutationFn: partPurchaseUpdate,
    onSuccess: () => {
      successToast;
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["purchaseHistory"] });
    },
  });

  const onSubmit = async (data: PartPurchaseSchema) => {
    try {
      data.identifier = purchase.identifier;
      await updatePartPurchase(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Une erreur s'est produite lors de la mise à jour de l'achat.
              </AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="receivedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de réception</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statut</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionner un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">En cours</SelectItem>
                      <SelectItem value="RECEIVED">Reçu</SelectItem>
                      <SelectItem value="CANCELLED">Annulé</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
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
