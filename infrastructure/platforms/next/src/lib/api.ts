import API from "@/app/config/apiClient";
import { LoginSchema } from "@/components/login/loginSchema";
import { RegisterSchema } from "@/components/register/registerSchema";
import { PasswordResetSchema } from "@/components/reset-password/passwordResetSchema";

export const login = async (data: LoginSchema) => API.post("/auth/login", data);

export const register = async (data: RegisterSchema) =>
  API.post("/auth/register", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);

export const sendPasswordResetEmail = async (email: string) =>
  API.post("/auth/password/forgot", { email });

export const resetPassword = async (data: PasswordResetSchema) =>
  API.post("/auth/password/reset", data);
