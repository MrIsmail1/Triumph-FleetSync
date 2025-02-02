import {Driver} from "./DriverResponses.ts";
import {Fleet} from "./FleetResponses.ts";
import {Motorbike} from "./MotorbikeResponses.ts";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
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
