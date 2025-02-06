"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { modelMotorbikeSchema, ModelMotorbikeSchema } from "./modelMotorbikeSchema";
import { modelMotorbikeCreate } from "@/lib/api";
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
import { Alert, AlertDescription } from "../ui/alert";
import React from "react";

export default function ModelMotorbikeForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    const form = useForm<ModelMotorbikeSchema>({
        resolver: zodResolver(modelMotorbikeSchema),
        defaultValues: {
            name: "",
            brand: "",
            maintenanceIntervalKm: 0,
            maintenanceIntervalTimeMonths: 0,
        },
    });

    const {
        mutate: createModelMotorbike,
        isError,
        error,
        isLoading,
    } = useMutation({
        mutationFn: modelMotorbikeCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false); // Fermer la modal après création réussie
            }
            queryClient.invalidateQueries(["modelMotorbikes"]); // Recharger la liste des modèles
        },
    });

    const onSubmit: SubmitHandler<ModelMotorbikeSchema> = (data) => {
        createModelMotorbike(data);
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer un modèle de moto</CardTitle>
                <CardDescription>
                    Remplissez les détails du modèle de moto.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {isError && (
                            <Alert variant="destructive">
                                <AlertDescription>{(error as Error)?.message}</AlertDescription>
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
                                    <FormLabel>Intervalle de maintenance (km)</FormLabel>
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

                        <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                            {form.formState.isSubmitting || isLoading
                                ? "Création..."
                                : "Créer le modèle"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
