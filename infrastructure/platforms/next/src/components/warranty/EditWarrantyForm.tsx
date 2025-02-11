"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { warrantySchema, WarrantySchema } from "./warrantySchema";
import { warrantyUpdate, motorbikesList } from "@/lib/api";
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
import { Alert, AlertDescription } from "../ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function EditWarrantyForm({
    warranty,
    setOpen,
}: {
    warranty: WarrantySchema;
    setOpen: (value: boolean) => void;
}) {
    const queryClient = useQueryClient();

    const { data: motorbikes, isLoading: isLoadingMotorbikes } = useQuery({
        queryKey: ["motorbikes"],
        queryFn: motorbikesList,
    });

    // Valeurs par défaut
    const defaultValues = {
        motorbikeId: warranty.motorbikeId || "",
        validFrom: new Date(warranty.validFrom).toISOString().split("T")[0],
        validUntil: new Date(warranty.validUntil).toISOString().split("T")[0],
        providerName: warranty.providerName.value,
        warrantyDetails: warranty.warrantyDetails.value,
    };

    const form = useForm<WarrantySchema>({
        resolver: zodResolver(warrantySchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [warranty]);

    const { mutateAsync: editWarrantyAsync, isError, isPending } = useMutation({
        mutationFn: async (data: WarrantySchema) => {
            return warrantyUpdate(data.identifier, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["warranties"] });
            setOpen(false);
        },
    });

    const onSubmit = async (data: WarrantySchema) => {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }
            const updatedData = {
            ...data,
            identifier: warranty.identifier,
        };

        await editWarrantyAsync(updatedData);
        };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {isError && (
                        <Alert variant="destructive">
                            <AlertDescription>
                                Une erreur s'est produite lors de la mise à jour de la garantie.
                            </AlertDescription>
                        </Alert>
                    )}

                    <FormField
                        control={form.control}
                        name="providerName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fournisseur</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Nom du fournisseur" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Date de début */}
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

                    {/* Date de fin */}
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


                    {/* Détails de la garantie */}
                    <FormField
                        control={form.control}
                        name="warrantyDetails"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Détails</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Détails de la garantie" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="w-full" type="submit" disabled={form.formState.isSubmitting || isPending}>
                        {form.formState.isSubmitting || isPending
                            ? "Mise à jour en cours..."
                            : "Mettre à jour"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
