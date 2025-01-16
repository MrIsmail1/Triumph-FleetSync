import { z } from "zod";

const passwordPattern: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z
  .object({
    email: z.string().email({ message: "L'email n'est pas valide" }),
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
    firstName: z.string().nonempty("Le prénom ne peut pas être vide"),
    lastName: z.string().nonempty("Le nom ne peut pas être vide"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
