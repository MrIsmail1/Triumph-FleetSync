import { LoginSchema } from "@/components/login/loginSchema";
import { RegisterSchema } from "@/components/register/registerSchema";
import { PasswordResetSchema } from "@/components/reset-password/passwordResetSchema";
import API from "@/config/apiClient";

import {FleetSchema} from "@/components/fleet/fleetSchema.ts";
import { LoginResponse, User } from "../types/AuthResponses.ts";
import { Fleet } from "../types/FleetResponses.ts";
import { ModelMotorbike } from "../types/ModelMotorbikeResponses.ts";
import { Motorbike } from "../types/MotorbikeResponses.ts";
import { Driver } from "../types/DriverResponses.ts";
import { Maintenance } from "../types/MaintenanceResponses.ts";
import { Warranty } from "../types/WarrantyResponses.ts";
import { Breakdown } from "../types/BreakdownResponses.ts";

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
export const updateUser = async (data: User) => API.put<User, User>("/user/update", data);



// Fleet
export const fleetsList = async () => API.get<Fleet[], Fleet[]>("/fleet/list");
export const fleetCreate = async (data: FleetSchema) => API.post<{ message: string }>("/fleet/create", data);
export const fleetsGetOne = async (fleetId: string) => API.get<Fleet>(`/fleet/${fleetId}`);
export const fleetUpdate = async (fleetId: string, data: Fleet) => API.put<Fleet>(`/fleet/update/${fleetId}`, data);
export const fleetDelete = async (fleetId: string) => API.delete<{ message: string }>(`/fleet/delete/${fleetId}`);


// Model Motorbike
export const modelMotorbikesList = async () => API.get<ModelMotorbike[], ModelMotorbike[]>("/modelmotorbike/list");
export const modelMotorbikeCreate = async (data: ModelMotorbike) => API.post<{ message: string }>("/modelmotorbike/create", data);
export const modelMotorbikeGetOne = async (modelMotorbikeId: string) => API.get<ModelMotorbike>(`/modelmotorbike/${modelMotorbikeId}`);
export const modelMotorbikeUpdate = async (modelMotorbikeId: string, data: ModelMotorbike) => API.put<ModelMotorbike>(`/modelmotorbike/update/${modelMotorbikeId}`, data);
export const modelMotorbikeDelete = async (modelMotorbikeId: string) => API.delete<{ message: string }>(`/modelmotorbike/delete/${modelMotorbikeId}`);

// Motorbike
export const motorbikesList = async () => API.get<Motorbike[], Motorbike[]>("/motorbike/list");
export const motorbikeCreate = async (data: Motorbike) => API.post<{ message: string }>("/motorbike/create", data);
export const motorbikeGetOne = async (motorbikeId: string) => API.get<Motorbike>(`/motorbike/motorbike/${motorbikeId}`);
export const motorbikeUpdate = async (motorbikeId: string, data: Motorbike) => API.put<Motorbike>(`/motorbike/update/${motorbikeId}`, data);
export const motorbikeDelete = async (motorbikeId: string) => API.delete<{ message: string }>(`/motorbike/delete/${motorbikeId}`);


// Driver
export const driversList = async () => API.get<Driver[]>(`/driver/list`);
export const driverCreate = async (data: Driver) => API.post<{ message: string }>("/driver/create", data);
export const driverUpdate = async (driverId: string, data: Driver) => API.put<Driver>(`/driver/update/${driverId}`, data);
export const driverGetOne = async (driverId: string) => API.get<Driver>(`/driver/driver/${driverId}`);
export const driverDelete = async (driverId: string) => API.delete<{ message: string }>(`/driver/delete/${driverId}`);

// Maintenance
export const maintenancesList = async () => API.get<Maintenance[], Maintenance[]>("/maintenance/list");
export const maintenanceCreate = async (data: Maintenance) => API.post<{ message: string }>("/maintenance/create", data);
export const maintenanceGetOne = async (maintenanceId: string) => API.get<Maintenance>(`/maintenance/${maintenanceId}`);
export const maintenanceUpdate = async (maintenanceId: string, data: Maintenance) => API.put<Maintenance>(`/maintenance/update/${maintenanceId}`, data);
export const maintenanceDelete = async (maintenanceId: string) => API.delete<{ message: string }>(`/maintenance/delete/${maintenanceId}`);


// Warranties
export const warrantiesList = async () => API.get<Warranty[], Warranty[]>("/warranty/list");
export const warrantyCreate = async (data: Warranty) => API.post<{ message: string }>("/warranty/create", data);
export const warrantyGetOne = async (warrantyId: string) => API.get<Warranty>(`/warranty/${warrantyId}`);
export const warrantyUpdate = async (warrantyId: string, data: Warranty) => API.put<Warranty>(`/warranty/update/${warrantyId}`, data);
export const warrantyDelete = async (warrantyId: string) => API.delete<{ message: string }>(`/warranty/delete/${warrantyId}`);

//Breakdowns
export const breakdownsList = async () => API.get<Breakdown[], Breakdown[]>("/breakdown/list");
export const breakdownCreate = async (data: Breakdown) => API.post<{ message: string }>("/breakdown/create", data);
export const breakdownGetOne = async (breakdownId: string) => API.get<Breakdown>(`/breakdown/${breakdownId}`);
export const breakdownUpdate = async (breakdownId: string, data: Breakdown) => API.put<Breakdown>(`/breakdown/update/${breakdownId}`, data);
export const breakdownDelete = async (breakdownId: string) => API.delete<{ message: string }>(`/breakdown/delete/${breakdownId}`);