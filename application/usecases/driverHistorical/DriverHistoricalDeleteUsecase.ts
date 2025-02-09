import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverHistoricalRepository} from "../../repositories/DriverHistoricalRepository";
import {DriverHistoricalNotFoundError} from "../../../domain/errors/DriverHistoricalNotFoundError";

export class DriverHistoricalDeleteUsecase {
    constructor(private driverHistoricalRepository: DriverHistoricalRepository) {}

    async execute(driverHistoryId: string, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const driverHistory = await this.driverHistoricalRepository.findById(driverHistoryId);
        if (!driverHistory) {
            return new DriverHistoricalNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.driverHistoricalRepository.delete(driverHistoryId);
        }

        if (currentUserRole === "admin") {
            return await this.driverHistoricalRepository.delete(driverHistoryId);
        }

        return new AccessDeniedError();
    }
}
