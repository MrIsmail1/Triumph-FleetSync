import { z } from "zod";

export const breakdownSchema = z.object({
    motorbikeId: z.string().uuid("Sélectionnez une moto valide"),
    description: z.string().nonempty("La description de la panne est requise"),
    actionTaken: z.string().nonempty("L'action prise est requise"),
    resolved: z.boolean(),
    resolutionDate: z.string().optional(),
});

export type BreakdownSchema = z.infer<typeof breakdownSchema>;
