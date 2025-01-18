import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {UserNotFoundError} from "../../../domain/errors/UserNotFoundError";
import {UserRepository} from "../../repositories/UserRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeListUsecase {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository,
                       private readonly userRepository: UserRepository) {
    }

    public async execute(currentUserIdentifier: string) {
        const currentUser = await this.userRepository.findById(currentUserIdentifier);
        if (!currentUser) {
            return new UserNotFoundError();
        }

        const roleValue = currentUser.role.value.toString();

        if (roleValue === "admin") {
            return await this.motorbikeRepository.findAll();
        } else if (roleValue === "client") {
            return await this.motorbikeRepository.findAllByClientId(currentUser.identifier);
        }
        return new AccessDeniedError();
    }
}
