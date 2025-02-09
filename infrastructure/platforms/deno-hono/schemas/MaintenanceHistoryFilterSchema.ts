import { z } from "zod";

export const maintenanceHitoryFilterSchema = z.object({
  companyOrDealershipId: z.string().optional(),
  motorbikeId: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
});

export type MaintenanceHitoryFilterSchema = z.infer<
  typeof maintenanceHitoryFilterSchema
>;
