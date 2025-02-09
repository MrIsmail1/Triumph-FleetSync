import { Driver } from "./DriverResponses";
import { Fleet } from "./FleetResponses";
import { Motorbike } from "./MotorbikeResponses";

export interface User {
  identifier: string;
  email?: { value: string };
  firstName?: { value: string };
  lastName?: { value: string };
  role?: { value: string };
  isVerified?: { value: string };
  motorbikes: Motorbike[];
  drivers: Driver[];
  fleets: Fleet[];
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface UseAuthOptions
  extends Omit<
    import("@tanstack/react-query").UseQueryOptions<User, Error>,
    "queryKey" | "queryFn"
  > {
  queryKey?: unknown[];
  queryFn?: () => unknown;
}
