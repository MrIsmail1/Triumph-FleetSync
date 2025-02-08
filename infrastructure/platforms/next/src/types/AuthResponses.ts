import {Motorbike} from "@/types/MotorbikeResponses";
import {Driver} from "@/types/DriverResponses";
import {Fleet} from "@/types/FleetResponses";


export interface User {
    identifier: string;
    firstName?: { value: string };
    lastName?: { value: string };
    email?: { value: string };
    passwordHash: string;
    role?: { value: string };
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
