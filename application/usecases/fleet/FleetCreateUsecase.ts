import {FleetRepository} from "../../repositories/FleetRepository";
import {FleetEntity} from "../../../domain/entities/FleetEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DealerShipCanHaveOneFleetError} from "../../../domain/errors/DealerShipCanHaveOneFleetError";

export class FleetCreateUsecase {
    public constructor(private readonly fleetRepository: FleetRepository) {
    }

    public async execute(name: string, currentUserIdentifier: string, currentUserRole: string) {

        const isDealershipAlreadyHaveFleet = await this.fleetRepository.findByCompanyOrDealershipId(currentUserIdentifier);

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "dealership" && isDealershipAlreadyHaveFleet !== null) {
            return new DealerShipCanHaveOneFleetError();
        }

        const nameOrError = ValidString.from(name);
        if (nameOrError instanceof Error) {
            return nameOrError;
        }

        const newFleet = FleetEntity.create(currentUserIdentifier, nameOrError);
        return await this.fleetRepository.save(newFleet);
    }
}