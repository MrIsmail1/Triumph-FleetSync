import { z } from "zod";

export const maintenanceCreateSchema = z.object({
  motorbikeId: z.string().uuid(),
  maintenanceDate: z.string().refine((date: string) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  mileageAtMaintenance: z.number().min(0, "Mileage must be non-negative"),
  maintenanceType: z.string().min(3).max(255),
  maintenanceCost: z.number().min(0, "Maintenance cost must be non-negative"),
  maintenanceDescription: z.string().min(3).max(1000),
  breakdownId: z.string().uuid().optional(),
  warrantyId: z.string().uuid().optional(),
  clientId: z.string().uuid(),
  userRole: z.string(),
});

export const maintenanceUpdateSchema = z.object({
  maintenanceDate: z
    .string()
    .optional()
    .refine((date: string) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
  mileageAtMaintenance: z.number().min(0).optional(),
  maintenanceType: z.string().min(3).max(255).optional(),
  maintenanceCost: z.number().min(0).optional(),
  maintenanceDescription: z.string().min(3).max(1000).optional(),
  breakdownId: z.string().uuid().optional(),
  warrantyId: z.string().uuid().optional(),
});
