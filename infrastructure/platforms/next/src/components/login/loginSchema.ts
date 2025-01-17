import { z } from "zod";



export const loginSchema = z.object({
  email: z.string().email({ message: "L'email n'est pas valide" }),
  password: z.string().nonempty("Le mot de passe ne peut pas être vide"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

