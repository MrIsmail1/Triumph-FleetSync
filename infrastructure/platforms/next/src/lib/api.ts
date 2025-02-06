import { LoginSchema } from "@/components/login/loginSchema";
import { RegisterSchema } from "@/components/register/registerSchema";
import { PasswordResetSchema } from "@/components/reset-password/passwordResetSchema";
import API from "@/config/apiClient";

import {FleetSchema} from "@/components/fleet/fleetSchema.ts"; // adjust import paths accordingly
import { LoginResponse, User } from "../types/AuthResponses.ts";
import { Fleet } from "../types/FleetResponses.ts";
import { ModelMotorbike } from "../types/ModelMotorbikeResponses.ts";
import { Motorbike } from "../types/MotorbikeResponses.ts";
import { Driver } from "../types/DriverResponses.ts";
import {DriverHistorical} from "@/types/DriverHistoricalResponses";
import {Try} from "@/types/TryResponses";
import {MotorbikeIncident} from "@/types/MotorbikeIncidentResponses";

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
export const fleetGetOne = async (fleetId: string) => API.get<Fleet>(`/fleet/fleet/${fleetId}`);
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
export const motorbikesListByFleetId = async (fleetId: string) => API.get<Motorbike[], Motorbike[]>(`/motorbike/listfleetId/${fleetId}`);

// Driver
export const driversList = async () => API.get<Driver[]>(`/driver/list`);
export const driverCreate = async (data: Driver) => API.post<{ message: string }>("/driver/create", data);
export const driverUpdate = async (driverId: string, data: Driver) => API.put<Driver>(`/driver/update/${driverId}`, data);
export const driverGetOne = async (driverId: string) => API.get<Driver>(`/driver/driver/${driverId}`);
export const driverDelete = async (driverId: string) => API.delete<{ message: string }>(`/driver/delete/${driverId}`);

// Historical Driver
export const driverHistoricalList = async (driverId: string) => API.get<DriverHistorical[]>(`/driverhistorical/list/${driverId}`);
export const driverHistoricalDelete = async (driverHistoricalId: string) => API.delete<{ message: string }>(`/driverhistorical/delete/${driverHistoricalId}`);

// Try
export const triesList = async () => API.get<Try[], Try[]>("/try/list");
export const tryCreate = async (data: Try) => API.post<{ message: string }>("/try/create", data);
export const tryGetOne = async (tryId: string) => API.get<Try>(`/try/${tryId}`);
export const tryUpdate = async (tryId: string, data: Try) => API.put<Try>(`/try/update/${tryId}`, data);
export const tryDelete = async (tryId: string) => API.delete<{ message: string }>(`/try/delete/${tryId}`);
export const triesListByDriverId = async (driverId: string) => API.get<Try[], Try[]>(`/try/list/driver/${driverId}`);
export const triesListByMotorbikeId = async (motorbikeId: string) => API.get<Try[], Try[]>(`/try/list/motorbike/${motorbikeId}`);

// Motorbike Incident
export const motorbikeIncidentsList = async () => API.get<MotorbikeIncident[], MotorbikeIncident[]>("/motorbikeincident/list");
export const motorbikeIncidentCreate = async (data: MotorbikeIncident) => API.post<{ message: string }>("/motorbikeincident/create", data);
export const motorbikeIncidentGetOne = async (incidentId: string) => API.get<MotorbikeIncident>(`/motorbikeincident/${incidentId}`);
export const motorbikeIncidentUpdate = async (incidentId: string, data: MotorbikeIncident) => API.put<MotorbikeIncident>(`/motorbikeincident/update/${incidentId}`, data);
export const motorbikeIncidentDelete = async (incidentId: string) => API.delete<{ message: string }>(`/motorbikeincident/delete/${incidentId}`);
export const motorbikeIncidentsListByDriverId = async (driverId: string) => API.get<MotorbikeIncident[], MotorbikeIncident[]>(`/motorbikeincident/list/driver/${driverId}`);
export const motorbikeIncidentsListByMotorbikeId = async (motorbikeId: string) => API.get<MotorbikeIncident[], MotorbikeIncident[]>(`/motorbikeincident/list/motorbike/${motorbikeId}`);
export const motorbikeIncidentsListByCompanyOrDealerShipId = async (companyOrDealerShipId: string) => API.get<MotorbikeIncident[], MotorbikeIncident[]>(`/motorbikeincident/list/company/${companyOrDealerShipId}`);

