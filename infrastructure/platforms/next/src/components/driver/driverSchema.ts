import { z } from "zod";

export const driverSchema = z.object({
    firstName: z.string().nonempty("Le prénom est obligatoire"),
    lastName: z.string().nonempty("Le nom est obligatoire"),
    email: z.string().email("L'email doit être valide"),
});

export type DriverSchema = z.infer<typeof driverSchema>;
