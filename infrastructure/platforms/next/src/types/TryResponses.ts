import {Driver} from "@/types/DriverResponses";
import {Motorbike} from "@/types/MotorbikeResponses";
import {User} from "@/types/AuthResponses";

export interface Try {
    identifier: string;
    dealershipId: string;
    driverId: string;
    motorbikeId: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    driverFirstName?: string,
    driverLastName?: string,
    licencePlateMotorbike?: string,
    colorMotorbike?: string,
    dealershipFirstName?: string,
    dealershipLastName?: string,
    driver?: Driver;
    motorbike?: Motorbike;
    dealership?: User;
}
