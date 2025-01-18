import {UserRepository} from "../../repositories/UserRepository";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {UserNotFoundError} from "../../../domain/errors/UserNotFoundError";

import {ValidString} from "../../../domain/types/ValidString";
import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {MotorbikeNotFoundError} from "../../../domain/errors/MotorbikeNotFoundError";
import {FrenchMotorbikeLicensePlate} from "../../../domain/types/FrenchMotorbikeLicensePlate";
import {VehicleIdentificationNumber} from "../../../domain/types/VehicleIdentificationNumber";
import {MotorbikeUpdateError} from "../../../domain/errors/MotorbikeUpdateError";
import {Role} from "../../../domain/types/Role";

export class MotorbikeUpdateUsecase {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository) {}

    public async execute(
        motorbikeId: string,
        userRole: Role,
        dataToUpdate: Partial<{
            modelId: string,
            fleetId: string;
            color: string;
            licensePlate: string;
            vehicleIdentificationNumber: string;
            mileage: number;
            status: string
        }>
    ) {
        if (userRole.value === "technician") {
            return new UnauthorizedActionError();
        }

        const motorbike = await this.motorbikeRepository.findById(motorbikeId);
        if (!motorbike) {
            return new MotorbikeNotFoundError();
        }

        if (dataToUpdate.licensePlate) {
            const licencesOrError = FrenchMotorbikeLicensePlate.from(dataToUpdate.licensePlate);
            if (licencesOrError instanceof Error) {
                return licencesOrError;
            }
            motorbike.licensePlate = licencesOrError;
        }

        if (dataToUpdate.vehicleIdentificationNumber) {
            const vinOrError = VehicleIdentificationNumber.from(dataToUpdate.vehicleIdentificationNumber);
            if (vinOrError instanceof Error) {
                return vinOrError;
            }
            motorbike.vehicleIdentificationNumber = vinOrError;
        }

        if (dataToUpdate.status) {
            const statusOrError = ValidString.from(dataToUpdate.status);
            if (statusOrError instanceof Error) {
                return statusOrError;
            }
            motorbike.status = statusOrError;
        }

        if (dataToUpdate.color !== undefined) {
            motorbike.color = dataToUpdate.color;
        }

        if (dataToUpdate.mileage !== undefined) {
            motorbike.mileage = dataToUpdate.mileage;
        }

        if (dataToUpdate.modelId !== undefined) {
            motorbike.modelId = dataToUpdate.modelId;
        }

        if (dataToUpdate.fleetId) {
            if (userRole.value !== "technician") {
                motorbike.fleetId = dataToUpdate.fleetId;
            } else {
                return new UnauthorizedActionError();
            }
        }

        const updatedMotorbike = await this.motorbikeRepository.update(motorbike);

        if (!updatedMotorbike) {
            return new MotorbikeUpdateError()
        }

        return updatedMotorbike;
    }
}
