import {DriverRepository} from "../../repositories/DriverRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";


export class DriverListUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {}

    public async execute(currentUserIdentifier: string, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return (await this.driverRepository.findAll()) ?? [];
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.driverRepository.findAllByCompanyOrDealershipId(currentUserIdentifier);
        }

        return new AccessDeniedError();
    }
}