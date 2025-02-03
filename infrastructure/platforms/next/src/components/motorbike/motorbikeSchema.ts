import { z } from "zod";

// Regex pour la plaque d'immatriculation française (2-3 lettres, tiret, 3 chiffres, tiret, 2-3 lettres)
const licensePlateRegex = /^[A-Z]{2,3}-\d{3}-[A-Z]{2,3}$/;

// Regex pour le numéro de châssis (VIN) - 17 caractères alphanumériques (sans I, O, Q)
const vinRegex = /^[A-HJ-NPR-Z\d]{17}$/;

export const motorbikeSchema = z.object({
    modelId: z.string().nonempty("Veuillez sélectionner un modèle"),
    color: z.string().nonempty("La couleur est obligatoire"),

    licensePlate: z.string()
        .trim()
        .toUpperCase()
        .regex(licensePlateRegex, "Format de plaque invalide (ex: AB-123-CD)"),

    vehicleIdentificationNumber: z.string()
        .trim()
        .toUpperCase()
        .regex(vinRegex, "Format VIN invalide (17 caractères, sans I, O, Q)"),

    mileage: z.
    string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 1, {
            message: "Le kilometrage doit etre de 1 au moins",
        }),

    status: z.string().nonempty("Le statut est obligatoire"),
    companyOrDealerShipId: z.string().optional(),
    driverId: z.string().nullable().optional(),
    fleetId: z.string().nullable().optional(),

});

export type MotorbikeSchema = z.infer<typeof motorbikeSchema>;
