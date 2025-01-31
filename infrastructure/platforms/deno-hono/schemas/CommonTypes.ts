import { z } from "zod";

export const ValidString = z.string().min(1, "String cannot be empty");
export const PositiveNumber = z.number().positive("Number must be positive");
