import {UserRepository} from "../../repositories/UserRepository";
import {UserNotFoundError} from "../../../domain/errors/UserNotFoundError";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {Role} from "../../../domain/types/Role";

export class ModelMotorbikeDeleteUsecase {
    constructor(private modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    async execute(userRole: Role, modelMotorbikeToDeleteId: string) {

        if (userRole.value !== "admin") {
            return new UnauthorizedActionError();
        }

        await this.modelMotorbikeRepository.delete(modelMotorbikeToDeleteId);

        return true;
    }
}