import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { z } from "zod";

export const sparePartSchema = z.object({
  name: ValidString,
  partNumber: ValidString,
  stockQuantity: PositiveNumber,
  reorderThreshold: PositiveNumber,
  brand: ValidString.optional(),
});

export type SparePartSchema = z.infer<typeof sparePartSchema>;
