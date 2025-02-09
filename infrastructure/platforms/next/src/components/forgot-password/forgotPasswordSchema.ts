import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "L'email n'est pas valide" }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
