"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { driverSchema, DriverSchema } from "./driverSchema";
import { driverCreate, getUser } from "@/lib/api";
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

export default function DriverForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    // Récupération de l'utilisateur connecté
    const { data: user } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    // Initialisation du formulaire avec RHF
    const form = useForm<DriverSchema>({
        resolver: zodResolver(driverSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            companyOrDealerShipId: user?.identifier || "",
        },
    });

    // Mutation pour créer le conducteur
    const {
        mutate: createDriver,
        isError,
        error,
        isLoading,
    } = useMutation({
        mutationFn: driverCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false); // Fermer la modal après création réussie
            }
            queryClient.invalidateQueries(["drivers"]); // Recharger la liste des conducteurs
        },
    });

    // Gestion de la soumission
    const onSubmit: SubmitHandler<DriverSchema> = (data) => {
        createDriver({ ...data, companyOrDealerShipId: user?.id });
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer un conducteur</CardTitle>
                <CardDescription>
                    Remplissez les informations du conducteur.
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

                        {/* Prénom */}
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Prénom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Nom */}
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Nom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                            {form.formState.isSubmitting || isLoading
                                ? "Création..."
                                : "Créer le conducteur"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
