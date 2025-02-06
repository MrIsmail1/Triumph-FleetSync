import { Driver } from "@/types/DriverResponses";
import { Motorbike } from "@/types/MotorbikeResponses";
import { User } from "@/types/AuthResponses";

export interface Try {
    id: string;
    dealershipId: string;
    driverId: string;
    motorbikeId: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    driver?: Driver;
    motorbike?: Motorbike;
    dealership?: User;
}
