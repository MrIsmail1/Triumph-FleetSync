import { LoginSchema } from "@/components/login/loginSchema";
import { RegisterSchema } from "@/components/register/registerSchema";
import { PasswordResetSchema } from "@/components/reset-password/passwordResetSchema";
import API from "@/config/apiClient";
import { LoginResponse, User } from "@/types/AuthResponses"; // adjust import paths accordingly

export const login = async (data: LoginSchema) =>
  API.post<LoginResponse>("/auth/login", data);

export const register = async (data: RegisterSchema) =>
  API.post<{ message: string }>("/auth/register", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get<{ message: string }>(`/auth/email/verify/${verificationCode}`);

export const sendPasswordResetEmail = async (email: string) =>
  API.post<{ message: string }>("/auth/password/forgot", { email });

export const resetPassword = async (data: PasswordResetSchema) =>
  API.post<{ message: string }>("/auth/password/reset", data);

export const getUser = async (): Promise<User> =>
  await API.get<User, User>("/user/profile");

export const logout = () => API.get<{ message: string }>("/auth/logout");

export const usersList = async () => API.get<User[], User[]>("/user/list");

export const updateUser = async (data: User) =>
  API.put<User, User>("/user/update", data);
