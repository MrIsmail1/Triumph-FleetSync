import {FleetRepository} from "../../repositories/FleetRepository";
import {UserNotFoundError} from "../../../domain/errors/UserNotFoundError";
import {UserRepository} from "../../repositories/UserRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class FleetListUsecase {
    public constructor(private readonly fleetRepository: FleetRepository,
                       private readonly userRepository: UserRepository) {
    }

    public async execute(currentUserIdentifier: string) {
        const currentUser = await this.userRepository.findById(currentUserIdentifier);
        if (!currentUser) {
            return new UserNotFoundError();
        }

        const roleValue = currentUser.role.value.toString();

        if (roleValue === "admin") {
            return await this.fleetRepository.findAll();
        } else if (roleValue === "client") {
            return await this.fleetRepository.findByClientId(currentUser.identifier);
        } else if (roleValue === "manager") {
            return await this.fleetRepository.findByManagerId(currentUser.identifier);
        } else {
            return new AccessDeniedError();
        }
    }
}