"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { motorbikeIncidentSchema, MotorbikeIncidentSchema } from "./motorbikeIncidentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { driversList, motorbikesList, motorbikeIncidentUpdate } from "@/lib/api";

export default function EditMotorbikeIncidentForm({
                                                      incident,
                                                      setOpen,
                                                  }: {
    incident: MotorbikeIncidentSchema;
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

    // Initialisation du formulaire avec les valeurs actuelles de l'incident
    const form = useForm<MotorbikeIncidentSchema>({
        resolver: zodResolver(motorbikeIncidentSchema),
        defaultValues: incident,
    });

    // Mutation pour mettre à jour l'incident
    const { mutate: updateIncidentMutation, isPending } = useMutation({
        mutationFn: (data: MotorbikeIncidentSchema) => motorbikeIncidentUpdate(incident.identifier, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["motorbikeIncidents"] });
            setOpen(false);
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(updateIncidentMutation)}
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
                                                <SelectItem key={driver.identifier} value={driver.identifier}>
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
                                                <SelectItem key={bike.identifier} value={bike.identifier}>
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
                    name="incidentType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type d'incident</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Ex: Panne moteur" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Commentaire</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Détails supplémentaires" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isPending}>
                    {isPending ? "Modification en cours..." : "Modifier l'incident"}
                </Button>
            </form>
        </Form>
    );
}
