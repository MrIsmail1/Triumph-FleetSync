import {FleetRepository} from "../../repositories/FleetRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {FleetNotFoundError} from "../../../domain/errors/FleetNotFoundError";

export class FleetGetOneUsecase {
    public constructor(private readonly fleetRepository: FleetRepository) {
    }

    public async execute(fleetId: string, currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const fleet = await this.fleetRepository.findById(fleetId);
        if (!fleet) {
            return new FleetNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.fleetRepository.findByIdAndCompanyOrDealershipId(fleetId, currentUserIdentifier);
        }


        if (currentUserRole === "admin") {
            return await this.fleetRepository.findById(fleetId);
        }

        return new AccessDeniedError();
    }
}