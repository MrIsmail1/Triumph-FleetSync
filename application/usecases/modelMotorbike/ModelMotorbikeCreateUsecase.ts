import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {ModelMotorbikeEntity} from "../../../domain/entities/ModelMotorbikeEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {Role} from "../../../domain/types/Role";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";

export class ModelMotorbikeCreateUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {}

    public async execute(name: string, brand: string, maintenanceIntervalKm: number, maintenanceIntervalTimeMonths: number, userRole: string) {
       if (userRole === "technician") {
           return new UnauthorizedActionError()
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