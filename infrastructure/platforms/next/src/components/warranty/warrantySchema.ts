import { z } from "zod";

export const warrantySchema = z.object({
  motorbikeId: z.string().uuid({ message: "Moto invalide" }),
  validFrom: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Date invalide",
  }),
  validUntil: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Date invalide",
  }),
  providerName: z.string().min(3, { message: "Nom du fournisseur trop court" }),
  warrantyDetails: z.string().min(5, { message: "Détails trop courts" }),
});

export type WarrantySchema = z.infer<typeof warrantySchema>;
