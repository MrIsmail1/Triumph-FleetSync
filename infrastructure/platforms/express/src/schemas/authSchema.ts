import { z } from "zod";

export const emailSchema = z.string().email().min(6).max(255);
export const passwordSchema = z.string().min(8).max(255);
export const verificationCodeSchema = z.string().min(1).max(37);

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional(),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    userAgent: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword);

export const passwordResetSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
    verificationCode: verificationCodeSchema,
  })
  .refine((data) => data.password === data.confirmPassword);
