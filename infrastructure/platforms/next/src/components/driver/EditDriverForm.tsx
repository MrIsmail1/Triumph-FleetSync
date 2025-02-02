"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { driverSchema, DriverSchema } from "./driverSchema";
import { driverUpdate } from "@/lib/api";
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

export default function EditDriverForm({
                                           driver,
                                           setOpen,
                                       }: {
    driver: DriverSchema;
    setOpen: (value: boolean) => void;
}) {
    const queryClient = useQueryClient();

    const defaultValues = {
        firstName: driver.firstName.value || "",
        lastName: driver.lastName.value || "",
        email: driver.email.value || "",
    };

    const form = useForm<DriverSchema>({
        resolver: zodResolver(driverSchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [driver]);

    const { mutateAsync: editDriverAsync, isError, isPending } = useMutation({
        mutationFn: async (data: DriverSchema) => {
            return driverUpdate(driver.identifier, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["drivers"]);
            setOpen(false);
        },
    });

    const onSubmit = async (data: DriverSchema) => {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }

        await editDriverAsync(data);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {isError && (
                        <Alert variant="destructive">
                            <AlertDescription>
                                Une erreur s'est produite lors de la mise à jour du conducteur.
                            </AlertDescription>
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
