"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fleetSchema, FleetSchema } from "./fleetSchema";
import { fleetUpdate } from "@/lib/api";
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

export default function EditFleetForm({
                                          fleet,
                                          setOpen,
                                      }: {
    fleet: FleetSchema;
    setOpen: (value: boolean) => void;
}) {
    const queryClient = useQueryClient();

    const defaultValues = {
        name: fleet.name?.value || "",
    };

    const form = useForm<FleetSchema>({
        resolver: zodResolver(fleetSchema),
        defaultValues,
    });

    useEffect(() => {
        form.reset(defaultValues);
    }, [fleet]);

    const { mutateAsync: editFleetAsync, isError, isPending } = useMutation({
        mutationFn: async (data: FleetSchema) => {
            return fleetUpdate(fleet.identifier, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["fleets"]);
            setOpen(false);
        },
    });

    const onSubmit = async (data: FleetSchema) => {
        if (Object.keys(form.formState.errors).length > 0) {
            return;
        }

        await editFleetAsync(data);
    };

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {isError && (
                        <Alert variant="destructive">
                            <AlertDescription>
                                Une erreur s'est produite lors de la mise à jour de la flotte.
                            </AlertDescription>
                        </Alert>
                    )}

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nom de la flotte</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Nom de la flotte" {...field} />
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
