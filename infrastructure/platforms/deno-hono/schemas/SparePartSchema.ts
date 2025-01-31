import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { MaintenancePartSchema } from "@/schemas/MaintenancePartSchema.ts";
import { PartPurchaseSchema } from "@/schemas/PartPurchaseSchema.ts";
import { z } from "zod";

export const SparePartSchema = z.object({
  name: ValidString,
  partNumber: ValidString,
  stockQuantity: PositiveNumber,
  reorderThreshold: PositiveNumber,
  purchases: z.array(PartPurchaseSchema),
  usedInMaintenance: z.array(MaintenancePartSchema),
  brand: ValidString.optional(),
});

export type SparePart = z.infer<typeof SparePartSchema>;
