"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { maintenanceSchema, MaintenanceSchema } from "./maintenanceSchema";
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
import React, { useEffect, useState } from "react";
import { motorbikesList, usersList, maintenanceCreate } from "@/lib/api";

export default function MaintenanceForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    // États pour vérifier si les données sont chargées
    const [motorbikesLoaded, setMotorbikesLoaded] = useState(false);
    const [companiesLoaded, setCompaniesLoaded] = useState(false);

    // Récupération des motos et des entreprises
    const { data: motorbikes, isLoading: isLoadingMotorbikes } = useQuery({
        queryKey: ["motorbikes"],
        queryFn: motorbikesList,
        onSuccess: () => setMotorbikesLoaded(true),
    });

    const { data: companies, isLoading: isLoadingCompanies } = useQuery({
        queryKey: ["companies"],
        queryFn: usersList, // Ici, on récupère les entreprises à partir des utilisateurs
        onSuccess: () => setCompaniesLoaded(true),
    });

    const form = useForm<MaintenanceSchema>({
        resolver: zodResolver(maintenanceSchema),
        defaultValues: {
            motorbikeId: "",
            companyOrDealerShipId: "",
            maintenanceDate: "",
            mileageAtMaintenance: 0,
            maintenanceType: "",
            maintenanceCost: 0,
            maintenanceDescription: "",
            breakdownId: "",
            warrantyId: "",
        },
    });

    // Définir une valeur par défaut après le chargement des données
    useEffect(() => {
        if (motorbikesLoaded && motorbikes?.length > 0) {
            form.setValue("motorbikeId", motorbikes[0].identifier);
        }
        if (companiesLoaded && companies?.length > 0) {
            form.setValue("companyOrDealerShipId", companies[0].identifier);
        }
    }, [motorbikesLoaded, motorbikes, companiesLoaded, companies]);

    const {
        mutate: createMaintenanceMutation,
        isError,
        error: mutationError,
        isLoading,
    } = useMutation({
        mutationFn: maintenanceCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) setOpen(false);
            queryClient.invalidateQueries(["maintenances"]);
        },
    });

    const onSubmit: SubmitHandler<MaintenanceSchema> = (data) => {

    const formattedData = {
        ...data,
        mileageAtMaintenance: parseInt(data.mileageAtMaintenance as unknown as string, 10) || 0,
        maintenanceCost: parseFloat(data.maintenanceCost as unknown as string) || 0,
    };

    createMaintenanceMutation(formattedData);
};


    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer une maintenance</CardTitle>
                <CardDescription>Remplissez les détails de la maintenance.</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {isError && (
                            <Alert variant="destructive">
                                <AlertDescription>{(mutationError as Error)?.message}</AlertDescription>
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

                        {/* Sélection d'une entreprise */}
                        <FormField
                            control={form.control}
                            name="companyOrDealerShipId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Entreprise concernée</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez une entreprise" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingCompanies ? (
                                                    <SelectItem disabled>Chargement...</SelectItem>
                                                ) : (
                                                    companies?.map((company) => (
                                                        <SelectItem key={company.identifier} value={company.identifier}>
                                                            {`${company.firstName.value} ${company.lastName.value}`}
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

                        {/* Date de maintenance */}
                        <FormField
                            control={form.control}
                            name="maintenanceDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date de maintenance</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Kilométrage */}
                        <FormField
                            control={form.control}
                            name="mileageAtMaintenance"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kilométrage</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value, 10) || 0)} // ✅ Conversion
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Coût */}
                        <FormField
                            control={form.control}
                            name="maintenanceCost"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Coût (€)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            {...field}
                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)} // ✅ Conversion
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Type de maintenance */}
                        <FormField
                            control={form.control}
                            name="maintenanceType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type de maintenance</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} placeholder="Ex: Révision, Vidange" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                         {/* Description */}
                        <FormField
                            control={form.control}
                            name="maintenanceDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} placeholder="Détails sur la maintenance" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                            {form.formState.isSubmitting || isLoading ? "Création..." : "Créer la maintenance"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
