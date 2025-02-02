import {User} from "./AuthResponses.ts";
import {Motorbike} from "./MotorbikeResponses.ts";

export interface Fleet {
    id: string;
    companyOrDealerShipId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    motorbikes: Motorbike[];
    companyOrDealerShip: User;
}