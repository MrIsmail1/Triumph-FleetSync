import {DriverRepository} from "../../repositories/DriverRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverNotFoundError} from "../../../domain/errors/DriverNotFoundError";

export class DriverDeleteUsecase {
    constructor(private driverRepository: DriverRepository) {}

    async execute(driverId: string, currentUserIdentifier: string, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const driver = await this.driverRepository.findById(driverId);
        if (!driver) {
            return new DriverNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.driverRepository.deleteByIdAndCompanyOrDealershipId(driverId, currentUserIdentifier);
        }

        if (currentUserRole === "admin") {
            return await this.driverRepository.delete(driverId);
        }

        return new AccessDeniedError();
    }
}