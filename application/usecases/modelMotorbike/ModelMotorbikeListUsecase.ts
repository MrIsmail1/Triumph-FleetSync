import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {Role} from "../../../domain/types/Role";

export class ModelMotorbikeListUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    public async execute(userRole: Role) {

        if (userRole.value === "technician") {
            return new AccessDeniedError();
        }

        return await this.modelMotorbikeRepository.findAll();
    }
}