import {Motorbike} from "./MotorbikeResponses";

export interface ModelMotorbike {
    identifier: string;
    name?: { value: string };
    brand?: { value: string };
    maintenanceIntervalKm: number;
    maintenanceIntervalTimeMonths: number;
    createdAt: string;
    updatedAt: string;
    motorbikes: Motorbike[];
}