import { z } from "zod";

export const partPurchaseSchema = z.object({
  partId: z.string({
    required_error: "Un ID de pièce est requis",
    invalid_type_error: "L’ID doit être une chaîne de caractères",
  }),
  quantity: z.coerce.number({
    required_error: "La quantité est requise",
    invalid_type_error: "La quantité doit être un nombre",
  }),
  costPerUnit: z.coerce.number({
    required_error: "Le coût unitaire est requis",
    invalid_type_error: "Le coût unitaire doit être un nombre",
  }),
  orderDate: z.string({
    required_error: "La date d’achat est requise",
  }),
  receivedDate: z.string().optional(),
  status: z.string({
    required_error: "Le statut est requis",
  }),
});

export type PartPurchaseSchema = z.infer<typeof partPurchaseSchema>;
