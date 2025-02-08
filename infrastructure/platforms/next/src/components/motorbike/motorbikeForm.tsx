"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { motorbikeSchema, MotorbikeSchema } from "./motorbikeSchema";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import React, { useEffect } from "react";
import { modelMotorbikesList, motorbikeCreate } from "@/lib/api";

export default function MotorbikeForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    const { data: models, isLoading: isLoadingModels, error } = useQuery({
        queryKey: ["motorbikeModels"],
        queryFn: modelMotorbikesList,
    });


    const form = useForm<MotorbikeSchema>({
        resolver: zodResolver(motorbikeSchema),
        defaultValues: {
            modelId: "",
            color: "",
            licensePlate: "",
            vehicleIdentificationNumber: "",
            mileage: 0,
            status: "",
        },
    });

    useEffect(() => {
        if (models && models.length > 0) {
            form.setValue("modelId", models[0].identifier);
        }
    }, [models, form]);

    const {
        mutate: createMotorbikeMutation,
        isError,
        error: mutationError,
        isPending,
    } = useMutation({
        mutationFn: motorbikeCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false);
            }
            queryClient.invalidateQueries({ queryKey: ["motorbikes"] });
        },
    });

    const onSubmit: SubmitHandler<MotorbikeSchema> = (data) => {
        createMotorbikeMutation(data);
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer une moto</CardTitle>
                <CardDescription>Remplissez les informations de la moto.</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {isError && (
                            <Alert variant="destructive">
                                <AlertDescription>{(mutationError as Error)?.message}</AlertDescription>
                            </Alert>
                        )}

                        <FormField
                            control={form.control}
                            name="modelId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Modèle de moto</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez un modèle" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingModels ? (
                                                    <SelectItem disabled>Chargement...</SelectItem>
                                                ) : (
                                                    models?.map((model) => (
                                                        <SelectItem key={model.identifier} value={model.identifier}>
                                                            {model.name?.value || "Nom inconnu"}
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
                            name="color"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Couleur</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Couleur de la moto" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="licensePlate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plaque d'immatriculation</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ex: AB-123-CD" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="vehicleIdentificationNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Numéro de châssis</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="VIN" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="mileage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kilométrage</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Ex: 5000" {...field} />
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
                                        <Input type="text" placeholder="Ex: Disponible, En panne" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={form.formState.isSubmitting || isPending}>
                            {form.formState.isSubmitting || isPending ? "Création..." : "Créer la moto"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
