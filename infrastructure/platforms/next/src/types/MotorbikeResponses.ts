import {ModelMotorbike} from "@/types/ModelMotorbikeResponses";
import {User} from "@/types/AuthResponses";
import {Driver} from "@/types/DriverResponses";
import {Fleet} from "@/types/FleetResponses";


export interface Motorbike {
    identifier: string;
    modelId: string;
    fleetId?: string;
    companyOrDealerShipId?: string;
    driverId?: string;
    licensePlate?: { value: string };
    vehicleIdentificationNumber?: { value: string };
    color: string;
    mileage: number;
    status?: { value: string };
    createdAt: string;
    updatedAt: string;
    modelMotorbikeName?: string,
    companyOrDealerShipFirstName?: string,
    companyOrDealerShipLastName?: string,
    driverFirstName?: string,
    driverLastName?: string,
    fleetName?: string,
    modelMotorbike: ModelMotorbike;
    companyOrDealerShip?: User;
    driver?: Driver;
    fleet?: Fleet;
}