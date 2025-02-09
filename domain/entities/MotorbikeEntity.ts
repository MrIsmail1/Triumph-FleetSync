import {ValidString} from "../types/ValidString";
import {VehicleIdentificationNumber} from "../types/VehicleIdentificationNumber";
import {FrenchMotorbikeLicensePlate} from "../types/FrenchMotorbikeLicensePlate";

export class MotorbikeEntity {
    private constructor(
        public identifier: string,
        public modelId: string,
        public fleetId: string | null,
        public companyOrDealerShipId: string | null,
        public driverId: string | null,
        public color: string,
        public licensePlate: FrenchMotorbikeLicensePlate,
        public vehicleIdentificationNumber: VehicleIdentificationNumber,
        public mileage: number,
        public status: ValidString,
        public createdAt: Date,
        public updatedAt: Date,
        public modelMotorbikeName?: string,
        public companyOrDealerShipFirstName?: string,
        public companyOrDealerShipLastName?: string,
        public driverFirstName?: string,
        public driverLastName?: string,
        public fleetName?: string,
    ) {
    }

    public static create(
        modelId: string,
        fleetId: string | null,
        companyOrDealerShipId: string | null,
        driverId: string | null,
        color: string,
        licensePlate: FrenchMotorbikeLicensePlate,
        vehicleIdentificationNumber: VehicleIdentificationNumber,
        mileage: number,
        status: ValidString
    ): MotorbikeEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new MotorbikeEntity(identifier, modelId, fleetId, companyOrDealerShipId, driverId, color, licensePlate, vehicleIdentificationNumber, mileage, status, createdAt, updatedAt);
    }

    public static reconstitute(data: {
        id: string;
        modelId: string;
        fleetId: string | null;
        companyOrDealerShipId: string | null;
        driverId: string | null,
        color: string;
        licensePlate: string;
        vehicleIdentificationNumber: string;
        mileage: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        modelMotorbikeName?: string;
        companyOrDealerShipFirstName?: string;
        companyOrDealerShipLastName?: string;
        driverFirstName?: string;
        driverLastName?: string;
        fleetName?: string;
    }): MotorbikeEntity {
        return new MotorbikeEntity(
            data.id,
            data.modelId,
            data.fleetId,
            data.companyOrDealerShipId,
            data.driverId,
            data.color,
            FrenchMotorbikeLicensePlate.reconstitute(data.licensePlate),
            VehicleIdentificationNumber.reconstitute(data.vehicleIdentificationNumber),
            data.mileage,
            ValidString.reconstitute(data.status),
            data.createdAt,
            data.updatedAt,
            data.modelMotorbikeName,
            data.companyOrDealerShipFirstName,
            data.companyOrDealerShipLastName,
            data.driverFirstName,
            data.driverLastName,
            data.fleetName,
        );
    }
}