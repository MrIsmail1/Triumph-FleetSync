import {FleetRepository} from "../../repositories/FleetRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class FleetListUsecase {
    public constructor(
        private readonly fleetRepository: FleetRepository) {
    }

    public async execute(currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return await this.fleetRepository.findAll();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.fleetRepository.findAllByCompanyOrDealershipId(currentUserIdentifier);
        }

        return new AccessDeniedError();
    }
}