"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useForm, SubmitHandler} from "react-hook-form";
import {motorbikeIncidentSchema, MotorbikeIncidentSchema} from "./motorbikeIncidentSchema";
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
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {Alert, AlertDescription} from "../ui/alert";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import React, {useEffect} from "react";
import {driversList, motorbikesList, motorbikeIncidentCreate, getUser} from "@/lib/api";

export default function MotorbikeIncidentForm({setOpen}: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    // Récupérer les conducteurs et les motos
    const {data: drivers, isLoading: isLoadingDrivers} = useQuery({
        queryKey: ["drivers"],
        queryFn: driversList,
    });

    const {data: motorbikes, isLoading: isLoadingMotorbikes} = useQuery({
        queryKey: ["motorbikes"],
        queryFn: motorbikesList,
    });

    // Récupérer l'utilisateur actuellement connecté
    const {data: currentUser} = useQuery({
        queryKey: ["currentUser"],
        queryFn: getUser,
    });

    const form = useForm<MotorbikeIncidentSchema>({
        resolver: zodResolver(motorbikeIncidentSchema),
        defaultValues: {
            companyOrDealerShipId: "",
            driverId: "",
            motorbikeId: "",
            incidentType: "",
            comment: "",
        },
    });

    useEffect(() => {
        if (currentUser) {
            form.setValue("companyOrDealerShipId", currentUser.identifier);
        }
    }, [currentUser, form]);

    const {mutate: createIncidentMutation, isError, error: mutationError, isPending} = useMutation({
        mutationFn: motorbikeIncidentCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false);
            }
            queryClient.invalidateQueries({queryKey: ["motorbikeIncidents"]});
        },
    });

    const onSubmit: SubmitHandler<MotorbikeIncidentSchema> = (data) => {
        createIncidentMutation(data);
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer un incident</CardTitle>
                <CardDescription>Remplissez les informations pour signaler un incident.</CardDescription>
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
                            name="driverId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Conducteur</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez un conducteur"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingDrivers ? (
                                                    <SelectItem disabled>Chargement...</SelectItem>
                                                ) : (
                                                    drivers?.map((driver) => (
                                                        <SelectItem key={driver.identifier} value={driver.identifier}>
                                                            {driver.firstName.value} {driver.lastName.value}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="motorbikeId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Moto</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionnez une moto"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {isLoadingMotorbikes ? (
                                                    <SelectItem disabled>Chargement...</SelectItem>
                                                ) : (
                                                    motorbikes?.map((bike) => (
                                                        <SelectItem key={bike.identifier} value={bike.identifier}>
                                                            {bike.licensePlate?.value}
                                                        </SelectItem>
                                                    ))
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="incidentType"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Type d'incident</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ex: Panne moteur" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="comment"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Commentaire</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Détails supplémentaires" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Création..." : "Créer l'incident"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
