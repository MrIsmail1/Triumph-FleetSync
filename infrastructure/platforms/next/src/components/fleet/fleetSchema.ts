import { z } from "zod";

export const fleetSchema = z.object({
    name: z
        .string()
        .nonempty("Le nom de la flotte ne peut pas être vide"),
});

export type FleetSchema = z.infer<typeof fleetSchema>;
