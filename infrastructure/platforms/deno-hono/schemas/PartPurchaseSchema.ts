import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { z } from "zod";

export const partPurchaseSchema = z.object({
  partId: ValidString,
  quantity: PositiveNumber,
  costPerUnit: PositiveNumber,
  totalCost: PositiveNumber,
  orderDate: z.string().optional(),
  receivedDate: z.string().optional(),
  status: z.string(),
});

export type PartPurchaseSchema = z.infer<typeof partPurchaseSchema>;
