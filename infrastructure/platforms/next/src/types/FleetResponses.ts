import {User} from "./AuthResponses";
import {Motorbike} from "./MotorbikeResponses";

export interface Fleet {
    identifier: string;
    companyOrDealerShipId: string;
    name?: { value: string };
    createdAt: string;
    updatedAt: string;
    userFirstName?: string,
    userLastName?: string,
    motorbikes: Motorbike[];
    companyOrDealerShip: User;
}