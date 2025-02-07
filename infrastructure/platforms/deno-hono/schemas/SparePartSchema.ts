import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { maintenancePartSchema } from "@/schemas/MaintenancePartSchema.ts";
import { partPurchaseSchema } from "@/schemas/PartPurchaseSchema.ts";
import { z } from "zod";

export const sparePartSchema = z.object({
  name: ValidString,
  partNumber: ValidString,
  stockQuantity: PositiveNumber,
  reorderThreshold: PositiveNumber,
  purchases: z.array(partPurchaseSchema),
  usedInMaintenance: z.array(maintenancePartSchema),
  brand: ValidString.optional(),
});

export type SparePartSchema = z.infer<typeof sparePartSchema>;
