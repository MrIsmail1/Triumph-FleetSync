import {User} from "./AuthResponses.ts";
import {Motorbike} from "./MotorbikeResponses.ts";
import {DriverHistorical} from "@/types/DriverHistoricalResponses";

export interface Driver {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    companyOrDealerShipId: string;
    motorbikeId?: string;
    createdAt: string;
    updatedAt: string;
    companyOrDealerShip: User;
    motorbikes: Motorbike[];
    driverHistorical: DriverHistorical;
}