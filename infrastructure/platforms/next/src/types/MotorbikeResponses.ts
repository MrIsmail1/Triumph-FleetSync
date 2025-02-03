import {User} from "./AuthResponses.ts";
import {Driver} from "./DriverResponses.ts";
import {Fleet} from "./FleetResponses.ts";
import {ModelMotorbike} from "./ModelMotorbikeResponses.ts";


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