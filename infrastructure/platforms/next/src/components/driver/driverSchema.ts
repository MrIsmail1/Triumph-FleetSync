import { z } from "zod";

export const driverSchema = z.object({
    firstName: z.string().nonempty("Le prénom est obligatoire"),
    lastName: z.string().nonempty("Le nom est obligatoire"),
    email: z.string().email("L'email doit être valide"),
    frenchLicenseNumber: z.string().nonempty("Le numéro de permis est obligatoire"),
    dateDeliveryLicence: z.string().nonempty("La date de délivrance est obligatoire"),
    dateExpirationLicense: z.string().nonempty("La date d'expiration est obligatoire"),
    frenchTypeMotorbikeLicense: z.string().nonempty("Le type de permis est obligatoire"),
    restrictionConditions: z.string().optional(),
    experience: z.string().optional(),
    motorbikeId: z.string().optional(),
});

export type DriverSchema = z.infer<typeof driverSchema>;
