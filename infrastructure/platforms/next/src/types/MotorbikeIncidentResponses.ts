import { Driver } from "@/types/DriverResponses";
import { Motorbike } from "@/types/MotorbikeResponses";
import { User } from "@/types/AuthResponses";

export interface MotorbikeIncident {
    id: string;
    companyOrDealerShipId: string;
    driverId: string;
    motorbikeId: string;
    incidentType: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    driver?: Driver;
    motorbike?: Motorbike;
    dealership?: User;
}
