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

    const { data: user } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const form = useForm<DriverSchema>({
        resolver: zodResolver(driverSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            frenchLicenseNumber: "",
            dateDeliveryLicence: "",
            dateExpirationLicense: "",
            frenchTypeMotorbikeLicense: "",
            restrictionConditions: "",
            experience: "",
            motorbikeId: "",
        },
    });

    const {
        mutate: createDriver,
        isError,
        error,
        isPending,
    } = useMutation({
        mutationFn: driverCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false);
            }
            queryClient.invalidateQueries({ queryKey: ["drivers"] });
        },
    });


    const onSubmit: SubmitHandler<DriverSchema> = (data) => {
        createDriver({ ...data, companyOrDealerShipId: user?.identifier });
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

                        <FormField
                            control={form.control}
                            name="frenchLicenseNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Numéro de permis</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Numéro de permis" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dateDeliveryLicence"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date de délivrance</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dateExpirationLicense"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date d'expiration</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="frenchTypeMotorbikeLicense"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type de permis</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Type de permis" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="restrictionConditions"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Restrictions / Conditions</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ex: Port de lunettes obligatoire" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Expérience</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ex: 5 ans de conduite" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={form.formState.isSubmitting || isPending}>
                            {form.formState.isSubmitting || isPending
                                ? "Création..."
                                : "Créer le conducteur"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
