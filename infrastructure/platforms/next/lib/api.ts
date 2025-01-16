import API from "@/app/config/apiClient";
import { LoginSchema } from "@/components/login/loginSchema";
import { RegisterSchema } from "@/components/register/registerSchema";

export const login = async (data: LoginSchema) => API.post("/auth/login", data);

export const register = async (data: RegisterSchema) =>
  API.post("/auth/register", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);
