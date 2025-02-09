import {Motorbike} from "./MotorbikeResponses";
import {Driver} from "@/types/DriverResponses";

export interface DriverHistorical {
    identifier: string;
    driverId: string;
    motorbikeId: string;
    createdAt: string;
    updatedAt: string;
    driverFirstName?: string,
    driverLastName?: string,
    licencePlateMotorbike?: string,
    colorMotorbike?: string
    motorbike: Motorbike;
    driver: Driver;
}
