import { Motorbike } from "./MotorbikeResponses";
import {Driver} from "@/types/DriverResponses";

export interface DriverHistorical {
    id: string;
    driverId: string;
    motorbikeId: string;
    createdAt: string;
    updatedAt: string;
    motorbike: Motorbike;
    driver: Driver;
}
