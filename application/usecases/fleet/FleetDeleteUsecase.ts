import {FleetRepository} from "../../repositories/FleetRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {FleetNotFoundError} from "../../../domain/errors/FleetNotFoundError";

export class FleetDeleteUsecase {
    constructor(private fleetRepository: FleetRepository) {
    }

    async execute(fleetToDeleteId: string, currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const fleet = await this.fleetRepository.findById(fleetToDeleteId);
        if (!fleet) {
            return new FleetNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
           return await this.fleetRepository.deleteByIdAndCompanyOrDealershipId(fleetToDeleteId, currentUserIdentifier);
        }

        if (currentUserRole === "admin") {
            return await this.fleetRepository.delete(fleetToDeleteId);
        }

        return new AccessDeniedError();
    }
}