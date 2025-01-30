import { z } from "zod";

export const sparePartFilterSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Le nom doit être une chaîne de caractères",
    })
    .optional(),
  partNumber: z
    .string({
      invalid_type_error:
        "Le numéro de pièce doit être une chaîne de caractères",
    })
    .optional(),
  brand: z
    .string({
      invalid_type_error: "La marque doit être une chaîne de caractères",
    })
    .optional(),
  stockQuantity: z
    .number({
      invalid_type_error: "La quantité en stock doit être un nombre",
    })
    .optional(),
  reorderThreshold: z
    .number({
      invalid_type_error: "Le seuil de réapprovisionnement doit être un nombre",
    })
    .optional(),
});

export type SparePartFilter = z.infer<typeof sparePartFilterSchema>;
