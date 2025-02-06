import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {MotorbikeNotFoundError} from "../../../domain/errors/MotorbikeNotFoundError";
import {FrenchMotorbikeLicensePlate} from "../../../domain/types/FrenchMotorbikeLicensePlate";
import {VehicleIdentificationNumber} from "../../../domain/types/VehicleIdentificationNumber";
import {MotorbikeUpdateError} from "../../../domain/errors/MotorbikeUpdateError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {ValidString} from "../../../domain/types/ValidString";
import {DriverHistoricalCreateUsecase} from "../driverHistorical/DriverHistoricalCreateUsecase";

export class MotorbikeUpdateUsecase {
    public constructor(
        private readonly motorbikeRepository: MotorbikeRepository,
        private readonly driverHistoricalCreateUsecase: DriverHistoricalCreateUsecase) {
    }

    public async execute(
        motorbikeId: string,
        currentUserIdentifier: string,
        currentUserRole: string,
        dataToUpdate: Partial<{
            modelId: string;
            fleetId: string;
            companyOrDealerShipId: string;
            driverId: string;
            color: string;
            licensePlate: string;
            vehicleIdentificationNumber: string;
            mileage: number;
            status: string;
        }>
    ) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const motorbike = await this.motorbikeRepository.findById(motorbikeId);
        if (!motorbike) {
            return new MotorbikeNotFoundError();
        }

        if (currentUserRole === "admin") {
            if (dataToUpdate.licensePlate) {
                const licenseOrError = FrenchMotorbikeLicensePlate.from(dataToUpdate.licensePlate);
                if (licenseOrError instanceof Error) {
                    return licenseOrError;
                }
                motorbike.licensePlate = licenseOrError;
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

            if (dataToUpdate.companyOrDealerShipId !== undefined) {
                motorbike.companyOrDealerShipId = dataToUpdate.companyOrDealerShipId;
            }
        }
        if (currentUserRole === "company" || currentUserRole === "dealership") {
            // Toujours mettre à jour fleetId et driverId, même si c'est null
            if (dataToUpdate.fleetId !== undefined) {
                motorbike.fleetId = dataToUpdate.fleetId;
            }

            if (dataToUpdate.driverId !== undefined) {
                // Vérifier que driverId n'est pas null avant d'ajouter un historique
                if (dataToUpdate.driverId !== null && motorbike.driverId !== dataToUpdate.driverId) {
                    await this.driverHistoricalCreateUsecase.execute(
                        dataToUpdate.driverId,
                        motorbikeId,
                    );
                }
                motorbike.driverId = dataToUpdate.driverId;
            }
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            const userMotorbike = await this.motorbikeRepository.findByIdAndCompanyOrDealershipId(motorbikeId, currentUserIdentifier);

            if (userMotorbike === null) {
                return new UnauthorizedActionError();
            }
        }

        const updatedMotorbike = await this.motorbikeRepository.update(motorbike);

        if (!updatedMotorbike) {
            return new MotorbikeUpdateError();
        }

        return updatedMotorbike;
    }
}
