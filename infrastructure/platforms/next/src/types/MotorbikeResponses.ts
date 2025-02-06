import {ModelMotorbike} from "@/types/ModelMotorbikeResponses";
import {User} from "@/types/AuthResponses";
import {Driver} from "@/types/DriverResponses";
import {Fleet} from "@/types/FleetResponses";


export interface Motorbike {
    id: string;
    modelId: string;
    fleetId?: string;
    companyOrDealerShipId?: string;
    driverId?: string;
    licensePlate: string;
    vehicleIdentificationNumber: string;
    color: string;
    mileage: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    modelMotorbike: ModelMotorbike;
    companyOrDealerShip?: User;
    driver?: Driver;
    fleet?: Fleet;
}