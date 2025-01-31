import { PositiveNumber, ValidString } from "@/schemas/CommonTypes.ts";
import { z } from "zod";

const PartPurchaseStatus = z.enum(["PENDING", "RECEIVED", "CANCELLED"]);

export const PartPurchaseSchema = z.object({
  partId: ValidString,
  quantity: PositiveNumber,
  costPerUnit: PositiveNumber,
  totalCost: PositiveNumber,
  status: PartPurchaseStatus,
  orderDate: z.string().datetime(),
  receivedDate: z.string().datetime().nullable(),
});

export type PartPurchase = z.infer<typeof PartPurchaseSchema>;
