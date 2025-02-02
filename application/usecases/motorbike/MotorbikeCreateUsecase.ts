import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {MotorbikeEntity} from "../../../domain/entities/MotorbikeEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {VehicleIdentificationNumber} from "../../../domain/types/VehicleIdentificationNumber";
import {FrenchMotorbikeLicensePlate} from "../../../domain/types/FrenchMotorbikeLicensePlate";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeCreateUsecase {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository) {
    }

    public async execute(modelId: string, fleetId: string, companyOrDealershipId: string, driverId: string, color: string, licensePlate: string, vehicleIdentificationNumber: string, mileage: number, status: string, currentUserRole: string) {
        if (currentUserRole !== "admin") {
            return new AccessDeniedError()
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
            companyOrDealershipId,
            driverId,
            color,
            licensePlateOrError,
            vinOrError,
            mileage,
            statusOrError
        );

        return await this.motorbikeRepository.save(newMotorbike);
    }
}
