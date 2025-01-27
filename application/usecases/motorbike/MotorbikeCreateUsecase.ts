import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {MotorbikeEntity} from "../../../domain/entities/MotorbikeEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {VehicleIdentificationNumber} from "../../../domain/types/VehicleIdentificationNumber";
import {FrenchMotorbikeLicensePlate} from "../../../domain/types/FrenchMotorbikeLicensePlate";
import {Role} from "../../../domain/types/Role";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";

export class MotorbikeCreateUsecase {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository) {
    }

    public async execute(modelId: string, fleetId: string, clientId: string, color: string, licensePlate: string, vehicleIdentificationNumber: string, mileage: number, status: string, userRole: string) {
        if (userRole === "technician") {
            return new UnauthorizedActionError()
        }

        if (userRole === "manager") {
            return new UnauthorizedActionError()
        }

        const statusOrError = ValidString.from(status);
        const licensePlateOrError = FrenchMotorbikeLicensePlate.from(licensePlate);
        const vinOrError = VehicleIdentificationNumber.from(vehicleIdentificationNumber);


        if (statusOrError instanceof Error) {
            return statusOrError;
        }

        if (licensePlateOrError instanceof Error) {
            return licensePlateOrError;
        }

        if (vinOrError instanceof Error) {
            return vinOrError;
        }

        const newMotorbike = MotorbikeEntity.create(
            modelId,
            fleetId,
            clientId,
            color,
            licensePlateOrError,
            vinOrError,
            mileage,
            statusOrError
        );

        return await this.motorbikeRepository.save(newMotorbike);
    }
}
