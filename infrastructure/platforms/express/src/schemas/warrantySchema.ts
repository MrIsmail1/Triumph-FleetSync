import { z, RefinementCtx } from "zod";

export const dateSchema = z
  .string()
  .refine((date: string): boolean => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  });

export const warrantyCreateSchema = z.object({
  validFrom: dateSchema,
  validUntil: dateSchema.refine(
    (validUntil: string, ctx: RefinementCtx): boolean => {
      const validFrom = new Date(ctx.parent.validFrom as string);
      return new Date(validUntil) >= validFrom;
    },
    { message: "validUntil must be greater than or equal to validFrom" }
  ),
  providerName: z.string().min(3).max(255),
  warrantyDetails: z.string().min(5).max(1000),
  userRole: z.string().min(3),
});

export const warrantyDeleteSchema = z.object({
  id: z.string().uuid(),
});

export const warrantiesListSchema = z.object({
  userIdentifier: z.string().uuid(),
  role: z.string().min(3),
});
