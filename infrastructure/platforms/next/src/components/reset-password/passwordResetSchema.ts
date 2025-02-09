import { z } from "zod";

const passwordPattern: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const passwordResetSchema = z
  .object({
    password: z
      .string()
      .nonempty("Le mot de passe ne peut pas être vide")
      .regex(
        passwordPattern,
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
      ),
    confirmPassword: z
      .string()
      .nonempty("La confirmation du mot de passe ne peut pas être vide"),
    verificationCode: z
      .string()
      .nonempty("Le code de réinitialisation est requis"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type PasswordResetSchema = z.infer<typeof passwordResetSchema>;

export interface PasswordResetInterface {
  password: string;
  verificationCode: string;
}
