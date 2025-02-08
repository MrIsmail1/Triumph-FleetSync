import {Driver} from "@/types/DriverResponses";
import {Motorbike} from "@/types/MotorbikeResponses";
import {User} from "@/types/AuthResponses";

export interface MotorbikeIncident {
    identifier: string;
    companyOrDealerShipId: string;
    driverId: string;
    motorbikeId: string;
    incidentType: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    driverFirstName?: string,
    driverLastName?: string,
    licencePlateMotorbike?: string,
    colorMotorbike?: string,
    vinMotorbike?: string,
    dealershipFirstName?: string,
    dealershipLastName?: string,
    driver?: Driver;
    motorbike?: Motorbike;
    dealership?: User;
}
