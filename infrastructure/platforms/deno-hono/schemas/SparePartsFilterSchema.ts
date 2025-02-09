import { z } from "zod";

export const sparePartFilterSchema = z.object({
  _id: z.string().optional(),
  name: z.string().optional(),
  partNumber: z.string().optional(),
  brand: z.string().optional(),
  stockQuantity: z.coerce.number().optional(),
  reorderThreshold: z.coerce.number().optional(),
});

export type SparePartFilterSchema = z.infer<typeof sparePartFilterSchema>;
