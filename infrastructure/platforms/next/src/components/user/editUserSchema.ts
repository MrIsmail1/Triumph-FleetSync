import { z } from "zod";

export const editUserSchema = z.object({
  email: z.string().email({ message: "L'email n'est pas valide" }),
  firstName: z.string().nonempty("Le prénom ne peut pas être vide"),
  lastName: z.string().nonempty("Le nom ne peut pas être vide"),
  role: z.enum(["client", "admin", "technician", "manager"]),
});

export type EditUserSchema = z.infer<typeof editUserSchema>;
