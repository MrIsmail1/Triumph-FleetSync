"use client";

import { driversList, motorbikesList, tryUpdate } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
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
import { trySchema, TrySchema } from "./trySchema";

export default function EditTryForm({
  tryItem,
  setOpen,
}: {
  tryItem: TrySchema;
  setOpen: (value: boolean) => void;
}) {
  const queryClient = useQueryClient();

  // Récupérer la liste des conducteurs
  const { data: drivers, isLoading: isLoadingDrivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: driversList,
  });

  // Récupérer la liste des motos
  const { data: motorbikes, isLoading: isLoadingMotorbikes } = useQuery({
    queryKey: ["motorbikes"],
    queryFn: motorbikesList,
  });

  const form = useForm<TrySchema>({
    resolver: zodResolver(trySchema),
    defaultValues: tryItem,
  });

  const { mutate: updateTryMutation, isPending } = useMutation({
    mutationFn: (data: TrySchema) => tryUpdate(tryItem.identifier, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tries"] });
      setOpen(false);
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          const formattedData = {
            ...data,
            endDate: new Date(data.endDate),
          };
          updateTryMutation(formattedData);
        })}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="driverId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conducteur</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un conducteur" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoadingDrivers ? (
                      <SelectItem disabled>Chargement...</SelectItem>
                    ) : (
                      drivers?.map((driver) => (
                        <SelectItem
                          key={driver.identifier}
                          value={driver.identifier}
                        >
                          {driver.firstName.value} {driver.lastName.value}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motorbikeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Moto</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une moto" />
                  </SelectTrigger>
                  <SelectContent>
                    {isLoadingMotorbikes ? (
                      <SelectItem disabled>Chargement...</SelectItem>
                    ) : (
                      motorbikes?.map((bike) => (
                        <SelectItem
                          key={bike.identifier}
                          value={bike.identifier}
                        >
                          {bike.licensePlate?.value}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de fin</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={
                    field.value
                      ? new Date(field.value).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Modification en cours..." : "Modifier l'essai"}
        </Button>
      </form>
    </Form>
  );
}
