import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {ValidString} from "../../../domain/types/ValidString";
import {FleetRepository} from "../../repositories/FleetRepository";
import {FleetNotFoundError} from "../../../domain/errors/FleetNotFoundError";
import {FleetUpdateError} from "../../../domain/errors/FleetUpdateError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError.ts";

export class FleetUpdateUsecase {
    public constructor(
        private readonly fleetRepository: FleetRepository) {}

    public async execute(
        fleetId: string,
        currentUserIdentifier: string,
        currentUserRole: string,
        dataToUpdate: Partial<{ name: string }>
    ) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const fleet = await this.fleetRepository.findById(fleetId);
        if (!fleet) {
            return new FleetNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            const userFleet = await this.fleetRepository.findByIdAndCompanyOrDealershipId(fleetId, currentUserIdentifier);

            if (userFleet === null) {
                return new UnauthorizedActionError();
            }
        }

        if (dataToUpdate.name) {
            const nameOrError = ValidString.from(dataToUpdate.name);
            if (nameOrError instanceof Error) {
                return nameOrError;
            }
            fleet.name = nameOrError;
        }

        const updatedFleet = await this.fleetRepository.update(fleet);

        if (!updatedFleet) {
            return new FleetUpdateError();
        }

        return updatedFleet;
    }
}
