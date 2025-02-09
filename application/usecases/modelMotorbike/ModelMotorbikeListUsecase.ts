import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class ModelMotorbikeListUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    public async execute(currentUserRole: string) {

        if (currentUserRole !== "admin") {
            return new AccessDeniedError();
        }

        return await this.modelMotorbikeRepository.findAll();
    }
}