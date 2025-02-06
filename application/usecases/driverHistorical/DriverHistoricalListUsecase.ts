import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverHistoricalRepository} from "../../repositories/DriverHistoricalRepository";

export class DriverHistoricalListUsecase {
    constructor(private readonly driverHistoricalRepository: DriverHistoricalRepository) {
    }

    public async execute(driverId: string, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return (await this.driverHistoricalRepository.findAll()) ?? [];
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.driverHistoricalRepository.findAllByDriverId(driverId);
        }

        return new AccessDeniedError();
    }
}