"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { fleetSchema, FleetSchema } from "./fleetSchema";
import { fleetCreate } from "@/lib/api";
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

export default function FleetForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const queryClient = useQueryClient();

    const form = useForm<FleetSchema>({
        resolver: zodResolver(fleetSchema),
        defaultValues: {
            name: "",
        },
    });

    // Mutation pour créer la flotte
    const {
        mutate: createFleet,
        isError,
        error,
        isPending,
    } = useMutation({
        mutationFn: fleetCreate,
        onSuccess: () => {
            form.reset();
            if (setOpen) {
                setOpen(false);
            }
            queryClient.invalidateQueries({ queryKey:["fleets"] });
        },
    });

    const onSubmit: SubmitHandler<FleetSchema> = (data) => {
        createFleet(data);
    };

    return (
        <Card className="mx-auto max-w-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Créer une flotte</CardTitle>
                <CardDescription>
                    Indiquez le nom de la nouvelle flotte.
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

                        {/* Champ name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de la flotte</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Nom de la flotte"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={form.formState.isSubmitting || isPending}>
                            {form.formState.isSubmitting || isPending
                                ? "Création..."
                                : "Créer la flotte"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
