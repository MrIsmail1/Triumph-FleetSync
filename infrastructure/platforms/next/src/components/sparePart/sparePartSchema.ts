import { z } from "zod";

export const sparePartSchema = z.object({
  name: z
    .string({ required_error: "Le nom est requis" })
    .nonempty("Le nom ne peut pas être vide"),
  partNumber: z
    .string({ required_error: "La référence de pièce est requise" })
    .nonempty("La référence de pièce ne peut pas être vide"),
  stockQuantity: z.coerce
    .number({ invalid_type_error: "Valeur invalide" })
    .int("Doit être un entier")
    .positive("Doit être un entier positif"),
  reorderThreshold: z.coerce
    .number({ invalid_type_error: "Valeur invalide" })
    .int("Doit être un entier")
    .positive("Doit être un entier positif"),
  brand: z.string().optional(),
});

export type SparePartSchema = z.infer<typeof sparePartSchema>;
