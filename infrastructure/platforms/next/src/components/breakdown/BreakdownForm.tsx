"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { breakdownSchema, BreakdownSchema } from "./breakdownSchema";
import { breakdownCreate, motorbikesList } from "@/lib/api";
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import React, { useEffect } from "react";

export default function BreakdownForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    const { data: motorbikes, isLoading: isLoadingMotorbikes, error: motorbikeError } = useQuery({
        queryKey: ["motorbikes"],
        queryFn: motorbikesList,
    });

    const form = useForm<BreakdownSchema>({
        resolver: zodResolver(breakdownSchema),
        defaultValues: {
            motorbikeId: "",
            description: "",
            actionTaken: "",
            resolved: false,
            resolutionDate: "",
        },
    });

    const {
        mutate: createBreakdown,
        isError,
        error,
        isLoading,
    } = useMutation({
        mutationFn: breakdownCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false);
            }
            queryClient.invalidateQueries(["breakdowns"]);
        },
        onError: (err) => {
            console.error("❌ Erreur lors de la création de la panne :", err);
        },
    });

    const onSubmit: SubmitHandler<BreakdownSchema> = (data) => {
        createBreakdown(data);
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer une panne</CardTitle>
                <CardDescription>Ajoutez une panne avec une description détaillée.</CardDescription>
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
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez une moto" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingMotorbikes ? (
                                                    <SelectItem disabled>Chargement...</SelectItem>
                                                ) : (
                                                    motorbikes?.map((bike) => (
                                                        <SelectItem key={bike.identifier} value={bike.identifier}>
                                                            {bike.licensePlate?.value ?? "Sans plaque"}
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

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ex: Panne moteur" {...field} />
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
                                        <Input type="text" placeholder="Ex: Changement de pièce" {...field} />
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

                        <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                            {form.formState.isSubmitting || isLoading
                                ? "Création..."
                                : "Créer la panne"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
