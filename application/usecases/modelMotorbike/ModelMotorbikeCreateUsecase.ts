import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {ModelMotorbikeEntity} from "../../../domain/entities/ModelMotorbikeEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError.ts";

export class ModelMotorbikeCreateUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    public async execute(name: string, brand: string, maintenanceIntervalKm: number, maintenanceIntervalTimeMonths: number, currentUserRole: string) {
        if (currentUserRole !== "admin") {
            return new AccessDeniedError()
        }

        const nameOrError = ValidString.from(name);
        const brandOrError = ValidString.from(brand);

        if (nameOrError instanceof Error) {
            return nameOrError;
        }

        if (brandOrError instanceof Error) {
            return brandOrError;
        }

        const newModelMotorbike = ModelMotorbikeEntity.create(
            nameOrError,
            brandOrError,
            maintenanceIntervalKm,
            maintenanceIntervalTimeMonths
        );

        return await this.modelMotorbikeRepository.save(newModelMotorbike);
    }
}