import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError.ts";
import {Role} from "../../../domain/types/Role.ts";

export class ModelMotorbikeGetOneUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository){
    }

    public async execute(modelMotorbikeId: string, userRole: Role) {
        if (userRole.value === "technician") {
            return new UnauthorizedActionError();
        }
        return await this.modelMotorbikeRepository.findById(modelMotorbikeId);
    }
}