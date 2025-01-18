import {UserRepository} from "../../repositories/UserRepository";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {FleetRepository} from "../../repositories/FleetRepository";
import {Role} from "../../../domain/types/Role";

export class FleetDeleteUsecase {
    constructor(private fleetRepository: FleetRepository) {}

    async execute(userRole: Role, fleetToDeleteId: string) {
        if (userRole.value !== "admin" && userRole.value !== "client") {
            return new UnauthorizedActionError();
        }

        await this.fleetRepository.delete(fleetToDeleteId);

        return true;
    }
}