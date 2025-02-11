import { User } from "./AuthResponses";
import { Motorbike } from "./MotorbikeResponses";

export interface BreakdownResponse {
    id: string;
    motorbikeId: string;
    companyOrDealerShipId: string;
    description: { value: string };
    actionTaken: { value: string };
    resolved: boolean;
    createdAt: string;
    updatedAt: string;
    resolutionDate?: string;
    companyOrDealerShip?: User;
    motorbike?: Motorbike;
}
