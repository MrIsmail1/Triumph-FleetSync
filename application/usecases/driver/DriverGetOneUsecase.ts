import {DriverRepository} from "../../repositories/DriverRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverNotFoundError} from "../../../domain/errors/DriverNotFoundError";


export class DriverGetOneUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {
    }

    public async execute(driverId: string, currentUserIdentifier: string, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const driver = await this.driverRepository.findById(driverId);
        if (!driver) {
            return new DriverNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.driverRepository.findByIdAndCompanyOrDealershipId(driverId, currentUserIdentifier);
        }

        if (currentUserRole === "admin") {
            return await this.driverRepository.findById(driverId);
        }

        return new AccessDeniedError();
    }
}