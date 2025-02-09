import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError.ts";

export class ModelMotorbikeGetOneUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    public async execute(modelMotorbikeId: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        return await this.modelMotorbikeRepository.findById(modelMotorbikeId);
    }
}