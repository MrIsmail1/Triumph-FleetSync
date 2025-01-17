import {ValidString} from "../types/ValidString";
import {VehicleIdentificationNumber} from "../types/VehicleIdentificationNumber";
import {FrenchMotorbikeLicensePlate} from "../types/FrenchMotorbikeLicensePlate";

export class MotorbikeEntity {
    private constructor(
        public identifier: string,
        public modelId: string,
        public fleetId: string,
        public clientId: string,
        public color: string,
        public licensePlate: FrenchMotorbikeLicensePlate,
        public vehicleIdentificationNumber: VehicleIdentificationNumber,
        public mileage: number,
        public status: ValidString,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    public static create(
        modelId: string,
        fleetId: string,
        clientId: string,
        color: string,
        licensePlate: FrenchMotorbikeLicensePlate,
        vehicleIdentificationNumber: VehicleIdentificationNumber,
        mileage: number,
        status: ValidString
    ): MotorbikeEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new MotorbikeEntity(identifier, modelId, fleetId, clientId, color, licensePlate, vehicleIdentificationNumber, mileage, status, createdAt, updatedAt);
    }

    public static reconstitute(data: {
        id: string;
        modelId: string;
        fleetId: string;
        clientId: string;
        color: string;
        licensePlate: string;
        vehicleIdentificationNumber: string;
        mileage: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }): MotorbikeEntity {
        return new MotorbikeEntity(
            data.id,
            data.modelId,
            data.fleetId,
            data.clientId,
            data.color,
            FrenchMotorbikeLicensePlate.reconstitute(data.licensePlate),
            VehicleIdentificationNumber.reconstitute(data.vehicleIdentificationNumber),
            data.mileage,
            ValidString.reconstitute(data.status),
            data.createdAt,
            data.updatedAt
        );
    }
}