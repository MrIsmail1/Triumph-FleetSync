"use client";
import { useToast } from "@/hooks/use-toast";
import { partPurchaseCreate } from "@/lib/api";
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

export default function CreatePartPurchaseForm({
  setOpen,
  partId,
}: {
  setOpen: (value: boolean) => void;
  partId: string;
}) {
  const router = useRouter();
  const successToast = Toast({
    buttonText: "Succès",
    description: "Achat de pièce enregistré avec succès.",
  });
  const queryClient = useQueryClient();
  const form = useForm<PartPurchaseSchema>({
    resolver: zodResolver(partPurchaseSchema),
    defaultValues: {
      partId: partId,
      quantity: 0,
      costPerUnit: 0,
      orderDate: "",
      receivedDate: "",
      status: "PENDING",
    },
  });

  const {
    mutateAsync: createPartPurchase,
    isError,
    isPending,
  } = useMutation({
    mutationFn: partPurchaseCreate,
    onSuccess: () => {
      successToast;
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["purchaseHistory"] });
    },
  });

  const onSubmit = async (data: PartPurchaseSchema) => {
    try {
      const totalCost = data.costPerUnit * data.quantity;
      const dataTosend = { ...data, totalCost };
      await createPartPurchase(dataTosend);
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
                Une erreur s'est produite lors de l'enregistrement de l'achat.
              </AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="costPerUnit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cout par unité </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Cout par unité..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantité</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Quantité" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orderDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date d'achat</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      <SelectItem value="CANCELLED">Annulée</SelectItem>
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
              ? "Ajout en cours..."
              : "Ajouter"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
