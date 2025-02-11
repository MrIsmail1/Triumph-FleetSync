"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { modelMotorbikeSchema, ModelMotorbikeSchema } from "./modelMotorbikeSchema";
import { modelMotorbikeUpdate } from "@/lib/api";
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

export default function EditModelMotorbikeForm({
                                                   modelMotorbike,
                                                   setOpen,
                                               }: {
    modelMotorbike: ModelMotorbikeSchema;
    setOpen: (value: boolean) => void;
}) {
    const queryClient = useQueryClient();

    const defaultValues = {
        name: modelMotorbike.name.value || "",
        brand: modelMotorbike.brand.value || "",
        maintenanceIntervalKm: modelMotorbike.maintenanceIntervalKm?.toString() || "",
        maintenanceIntervalTimeMonths: modelMotorbike.maintenanceIntervalTimeMonths?.toString() || "",
    };

    const form = useForm<ModelMotorbikeSchema>({
        resolver: zodResolver(modelMotorbikeSchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [modelMotorbike]);

    const { mutateAsync: editModelMotorbikeAsync, isError, isPending } = useMutation({
        mutationFn: async (data: ModelMotorbikeSchema) => {
            return modelMotorbikeUpdate(modelMotorbike.identifier, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["modelMotorbikes"] });
            setOpen(false);
        },
    });

    const onSubmit = async (data: ModelMotorbikeSchema) => {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }

        await editModelMotorbikeAsync(data);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {isError && (
                        <Alert variant="destructive">
                            <AlertDescription>
                                Une erreur s'est produite lors de la mise à jour du modèle de moto.
                            </AlertDescription>
                        </Alert>
                    )}

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nom du modèle</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Nom du modèle" {...field} />
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
                                    <Input type="text" placeholder="Marque" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="maintenanceIntervalKm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Intervalle de maintenance (Km)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Ex: 5000" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="maintenanceIntervalTimeMonths"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Intervalle de maintenance (mois)</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Ex: 6" {...field} />
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
