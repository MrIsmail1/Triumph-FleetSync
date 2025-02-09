import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { z } from "zod";

export const maintenancePartSchema = z.object({
  partId: ValidString,
  maintenanceId: ValidString,
  quantityUsed: PositiveNumber,
  cost: PositiveNumber,
});

export type MaintenancePartSchema = z.infer<typeof maintenancePartSchema>;
