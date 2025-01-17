import {UserRepository} from "../../repositories/UserRepository";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {UserNotFoundError} from "../../../domain/errors/UserNotFoundError";

import {ValidString} from "../../../domain/types/ValidString";
import {FleetRepository} from "../../repositories/FleetRepository";
import {FleetNotFoundError} from "../../../domain/errors/FleetNotFoundError";
import {FleetUpdateError} from "../../../domain/errors/FleetUpdateError";
import {Role} from "../../../domain/types/Role";

export class FleetUpdateUsecase {
    public constructor(private readonly fleetRepository: FleetRepository,
                       private readonly userRepository: UserRepository) {
    }

    public async execute(fleetId: string, userRole: Role, dataToUpdate: Partial<{ name: string; managerId: string; }>) {
        if (userRole.value === "technician") {
            return new UnauthorizedActionError();
        }

        const fleet = await this.fleetRepository.findById(fleetId);
        if (!fleet) {
            return new FleetNotFoundError();
        }

        if (dataToUpdate.name) {
            const nameOrError = ValidString.from(dataToUpdate.name);
            if (nameOrError instanceof Error) {
                return nameOrError;
            }
            fleet.name = nameOrError;
        }

        if (userRole.value === "admin" || "client") {
            if (dataToUpdate.managerId) {
                const manager = await this.userRepository.findById(dataToUpdate.managerId);
                if (!manager) {
                    return new UserNotFoundError();
                }
                fleet.managerId = manager.identifier;
            }
        }

        const updatedFleet = await this.fleetRepository.update(fleet);

        if (!updatedFleet) {
            return new FleetUpdateError();
        }

    }
}
