import {FleetRepository} from "../../repositories/FleetRepository";
import {FleetEntity} from "../../../domain/entities/FleetEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {Role} from "../../../domain/types/Role";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class FleetCreateUsecase {
    public constructor(private readonly fleetRepository: FleetRepository) {}

    public async execute(clientId: string, managerId: string, name: string, userRole: string) {

        if (userRole === "technician") {
            return new AccessDeniedError()
        }

        if (userRole === "manager") {
            return new AccessDeniedError()
        }

        const nameOrError = ValidString.from(name);
        if (nameOrError instanceof Error) {
            return nameOrError;
        }

        const newFleet = FleetEntity.create(clientId, managerId, nameOrError);
        return await this.fleetRepository.save(newFleet);
    }
}