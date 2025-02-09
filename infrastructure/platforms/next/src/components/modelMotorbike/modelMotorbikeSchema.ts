import { z } from "zod";

export const modelMotorbikeSchema = z.object({
    name: z
        .string()
        .nonempty("Le nom du modèle ne peut pas être vide"),
    brand: z
        .string()
        .nonempty("La marque ne peut pas être vide"),
    maintenanceIntervalKm: z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 500, {
            message: "L'intervalle de maintenance doit être un nombre d'au moins 500 km",
        }),
    maintenanceIntervalTimeMonths: z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 1, {
            message: "L'intervalle de maintenance doit être un nombre d'au moins 1 mois",
        }),
});

export type ModelMotorbikeSchema = z.infer<typeof modelMotorbikeSchema>;
