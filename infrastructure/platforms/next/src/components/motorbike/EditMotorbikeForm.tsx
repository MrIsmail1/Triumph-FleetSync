"use client";
import {motorbikeUpdate, modelMotorbikesList, usersList, fleetsList, driversList} from "@/lib/api";
import {Motorbike} from "@/types/MotorbikeResponses";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {Alert, AlertDescription} from "../ui/alert";
import {Button} from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {Input} from "../ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import React, {useEffect} from "react";
import {motorbikeSchema, MotorbikeSchema} from "./motorbikeSchema";

export default function EditMotorbikeForm({
                                              motorbike,
                                              setOpen,
                                              setSelectedMotorbike,
                                              currentUserRole,
                                          }: {
    motorbike: Motorbike;
    setOpen: (value: boolean) => void;
    setSelectedMotorbike: (value: Motorbike | null) => void;
    currentUserRole: string | undefined;
}) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const userRole = currentUserRole?.value;

    if (userRole == "admin") {
        const {data: models, isLoading: isLoadingModels} = useQuery({
            queryKey: ["motorbikeModels"],
            queryFn: modelMotorbikesList,
        });

        const {data: users, isLoading: isLoadingUsers} = useQuery({
            queryKey: ["users"],
            queryFn: usersList,
        });
    }

    const {data: drivers, isLoading: isLoadingDrivers} = useQuery({
        queryKey: ["drivers"],
        queryFn: driversList,
    });

    const {data: fleets, isLoading: isLoadingFleets} = useQuery({
        queryKey: ["fleets"],
        queryFn: fleetsList,
    });

    const defaultValues = {
        companyOrDealerShipId: motorbike.companyOrDealerShipId || "",
        modelId: motorbike.modelId || "",
        licensePlate: motorbike.licensePlate?.value || "",
        vehicleIdentificationNumber: motorbike.vehicleIdentificationNumber?.value || "",
        color: motorbike.color || "",
        mileage: motorbike.mileage?.toString() || "",
        status: motorbike.status?.value || "",
        fleetId: motorbike.fleetId || "",
        driverId: motorbike.driverId || "",
    };

    const form = useForm<MotorbikeSchema>({
        resolver: zodResolver(motorbikeSchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [motorbike]);

    const {mutateAsync: editMotorbikeAsync, isError, isPending} = useMutation({
        mutationFn: async (data: Motorbike) => {
            return motorbikeUpdate(motorbike.identifier, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["motorbikes"]);
            setOpen(false);

            if (setSelectedMotorbike) {
                setSelectedMotorbike(null);
            } else {
                console.error("setSelectedMotorbike is undefined!");
            }
        },
    });

    const onSubmit = async (data: MotorbikeSchema) => {

        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }

        const changedFields: Partial<Motorbike> = {};
        Object.keys(data).forEach((key) => {
            if (data[key] !== defaultValues[key] || data[key] === null) {
                changedFields[key] = data[key];
            }
        });


        await editMotorbikeAsync(changedFields);
    };



    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {isError && (
                        <Alert variant="destructive">
                            <AlertDescription>
                                Une erreur s'est produite lors de la mise à jour des informations de la moto.
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Affectation du conducteur */}
                    {["dealership", "company"].includes(userRole) && (
                        <>
                            <FormField
                                control={form.control}
                                name="driverId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Affecter à un conducteur</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => {
                                                    const newValue = value === "none" ? null : value;
                                                    field.onChange(newValue);
                                                    form.setValue("driverId", newValue, { shouldDirty: true });
                                                }}
                                                value={field.value || ""}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {field.value
                                                            ? drivers?.find(driver => driver.identifier === field.value)?.firstName.value +
                                                            " " +
                                                            drivers?.find(driver => driver.identifier === field.value)?.lastName.value
                                                            : "Sélectionnez un conducteur"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">Aucun conducteur</SelectItem>
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



                            {/* Affectation de la flotte */}
                            <FormField
                                control={form.control}
                                name="fleetId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Affecter à une flotte</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => {
                                                    const newValue = value === "none" ? null : value;
                                                    field.onChange(newValue);
                                                    form.setValue("fleetId", newValue, { shouldDirty: true });
                                                }}
                                                value={field.value || ""}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {field.value
                                                            ? fleets?.find(fleet => fleet.identifier === field.value)?.name.value
                                                            : "Sélectionnez une flotte"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">Aucune flotte</SelectItem>
                                                    {isLoadingFleets ? (
                                                        <SelectItem disabled>Chargement...</SelectItem>
                                                    ) : (
                                                        fleets?.map((fleet) => (
                                                            <SelectItem key={fleet.identifier} value={fleet.identifier}>
                                                                {fleet.name?.value || "Nom inconnu"}
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


                        </>
                    )}

                    <Button className="w-full" type="submit" disabled={form.formState.isSubmitting || isPending}>
                        {form.formState.isSubmitting || isPending ? "Mise à jour en cours..." : "Mettre à jour"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
