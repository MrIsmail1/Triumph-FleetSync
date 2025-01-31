import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { z } from "zod";

export const MaintenancePartSchema = z.object({
  partId: ValidString,
  maintenanceId: ValidString,
  quantityUsed: PositiveNumber,
  cost: PositiveNumber,
});
