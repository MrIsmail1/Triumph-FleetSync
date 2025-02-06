import { z } from "zod";

// Schéma pour un essai de moto (Try)
export const trySchema = z.object({
    dealershipId: z.string().nonempty("Le concessionnaire est obligatoire"),
    driverId: z.string().nonempty("Le conducteur est obligatoire"),
    motorbikeId: z.string().nonempty("La moto est obligatoire"),
    endDate: z.string().nonempty("La date de fin doit être dans le futur"),
});

export type TrySchema = z.infer<typeof trySchema>;
