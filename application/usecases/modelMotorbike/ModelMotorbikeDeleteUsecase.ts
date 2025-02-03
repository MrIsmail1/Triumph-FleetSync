import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {Role} from "../../../domain/types/Role";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError.ts";

export class ModelMotorbikeDeleteUsecase {
    constructor(private modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    async execute(currentUserRole: string, modelMotorbikeToDeleteId: string) {

        if (currentUserRole !== "admin") {
            return new AccessDeniedError();
        }

        await this.modelMotorbikeRepository.delete(modelMotorbikeToDeleteId);

        return true;
    }
}