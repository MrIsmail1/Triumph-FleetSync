"use client";
import { useToast } from "@/hooks/use-toast";
import { sparePartCreate } from "@/lib/api";
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
import { SparePartSchema, sparePartSchema } from "./sparePartSchema";

export default function CreateSparePartForm({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) {
  const router = useRouter();
  const successToast = Toast({
    buttonText: "Succès",
    description: "Pièce détachée ajoutée avec succès.",
  });
  const queryClient = useQueryClient();
  const form = useForm<SparePartSchema>({
    resolver: zodResolver(sparePartSchema),
    defaultValues: {
      name: "",
      partNumber: "",
      stockQuantity: 0,
      reorderThreshold: 0,
      brand: "",
    },
  });

  const {
    mutateAsync: createSparePart,
    isError,
    isPending,
  } = useMutation({
    mutationFn: sparePartCreate,
    onSuccess: () => {
      successToast;
      setTimeout(() => {
        setOpen(false);
        router.replace("/sparepart");
        queryClient.invalidateQueries({ queryKey: ["spareParts"] });
      }, 300);
    },
  });

  const onSubmit = async (data: SparePartSchema) => {
    try {
      await createSparePart(data);
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
                Une erreur s'est produite lors de la création de la pièce
                détachée.
              </AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de la pièce</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marque</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Marque..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="partNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de pièce</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Numéro de pièce" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stockQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantité en stock</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Quantité" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reorderThreshold"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seuil de réapprovisionnement</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Seuil" {...field} />
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
