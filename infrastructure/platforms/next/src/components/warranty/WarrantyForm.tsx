"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { warrantySchema, WarrantySchema } from "./warrantySchema";
import { warrantyCreate, motorbikesList } from "@/lib/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Alert, AlertDescription } from "../ui/alert";
import React, { useEffect } from "react";

export default function WarrantyForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
  const queryClient = useQueryClient();

  // Récupérer la liste des motos pour l'association
  const { data: motorbikes, isLoading: isLoadingMotorbikes } = useQuery({
    queryKey: ["motorbikes"],
    queryFn: motorbikesList,
  });

  // Initialisation du formulaire
  const form = useForm<WarrantySchema>({
    resolver: zodResolver(warrantySchema),
    defaultValues: {
      motorbikeId: "",
      validFrom: "",
      validUntil: "",
      providerName: "",
      warrantyDetails: "",
    },
  });

  // Pré-remplir la moto si disponible
  useEffect(() => {
    if (motorbikes && motorbikes.length > 0) {
      form.setValue("motorbikeId", motorbikes[0].id);
    }
  }, [motorbikes]);

  // Mutation pour créer la garantie
  const {
    mutate: createWarranty,
    isError,
    error,
    isLoading,
  } = useMutation({
    mutationFn: warrantyCreate,
    onSuccess: () => {
      form.reset();
      if (setOpen) {
        setOpen(false);
      }
      queryClient.invalidateQueries(["warranties"]); // Recharger la liste des garanties
    },
  });

  
  const onSubmit: SubmitHandler<WarrantySchema> = (data) => {
    createWarranty(data);
  };
  

  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Ajouter une Garantie</CardTitle>
        <CardDescription>Ajoutez une garantie pour une moto spécifique.</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {isError && (
              <Alert variant="destructive">
                <AlertDescription>{(error as Error)?.message}</AlertDescription>
              </Alert>
            )}

            {/* Sélection de la moto */}
            <FormField
              control={form.control}
              name="motorbikeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moto concernée</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={isLoadingMotorbikes}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une moto" />
                      </SelectTrigger>
                      <SelectContent>
                        {motorbikes?.map((bike) => (
                          <SelectItem key={bike.identifier} value={bike.identifier}>
                            {bike.licensePlate.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dates */}
            <FormField
              control={form.control}
              name="validFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de début</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="validUntil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de fin</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Fournisseur */}
            <FormField
              control={form.control}
              name="providerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fournisseur</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nom du fournisseur"
                      {...field}
                      value={typeof field.value === "object" ? field.value.value : field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />



            {/* Détails */}
            <FormField
              control={form.control}
              name="warrantyDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Détails de la Garantie</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ex : Garantie moteur 2 ans" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
              {form.formState.isSubmitting || isLoading ? "Ajout..." : "Ajouter la Garantie"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
