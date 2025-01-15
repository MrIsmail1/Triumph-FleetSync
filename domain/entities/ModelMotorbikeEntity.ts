import {ValidString} from "../types/ValidString";

export class ModelMotorbikeEntity {
    private constructor(
        public identifier: string,
        public name: ValidString,
        public brand: ValidString,
        public maintenanceIntervalKm: number,
        public maintenanceIntervalTimeMonths: number,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    public static create(
        name: ValidString,
        brand: ValidString,
        maintenanceIntervalKm: number,
        maintenanceIntervalTimeMonths: number
    ): ModelMotorbikeEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new ModelMotorbikeEntity(
            identifier,
            name,
            brand,
            maintenanceIntervalKm,
            maintenanceIntervalTimeMonths,
            createdAt,
            updatedAt
        );
    }

    public static reconstitute(data: {
        id: string;
        name: string;
        brand: string;
        maintenanceIntervalKm: number;
        maintenanceIntervalTimeMonths: number;
        createdAt: Date;
        updatedAt: Date;
    }): ModelMotorbikeEntity {
        return new ModelMotorbikeEntity(
            data.id,
            ValidString.reconstitute(data.name),
            ValidString.reconstitute(data.brand),
            data.maintenanceIntervalKm,
            data.maintenanceIntervalTimeMonths,
            data.createdAt,
            data.updatedAt
        );
    }
}