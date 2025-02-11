import { Motorbike } from "./MotorbikeResponses";

export interface Warranty {
    id: string;
    motorbikeId: string;
    validFrom: string;
    validUntil: string;
    providerName: string;
    warrantyDetails: string;
    createdAt: string;
    updatedAt: string;
    motorbike?: Motorbike;
}
