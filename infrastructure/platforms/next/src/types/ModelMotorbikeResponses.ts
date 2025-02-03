import {Motorbike} from "./MotorbikeResponses.ts";

export interface ModelMotorbike {
    id: string;
    name: string;
    brand: string;
    maintenanceIntervalKm: number;
    maintenanceIntervalTimeMonths: number;
    createdAt: string;
    updatedAt: string;
    motorbikes: Motorbike[];
}