import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {ValidString} from "../../../domain/types/ValidString";
import {ModelMotorbikeRepository} from "../../repositories/ModelMotorbikeRepository";
import {ModelMotorbikeNotFoundError} from "../../../domain/errors/ModelMotorbikeNotFoundError";
import {ModelMotorbikeUpdateError} from "../../../domain/errors/ModelMotorbikeUpdateError";

export class ModelMotorbikeUpdateUsecase {
    public constructor(private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    public async execute(modelMotorbikeId: string, currentUserRole: string, dataToUpdate: Partial<{
            name: string;
            brand: string;
            maintenanceIntervalKm: number;
            maintenanceIntervalTimeMonths: number;
        }>
    ) {

        if (!dataToUpdate) {
            return new Error("Les données de mise à jour sont manquantes.");
        }

        if (currentUserRole !== "admin") {
            return new UnauthorizedActionError();
        }

        const modelMotorbike = await this.modelMotorbikeRepository.findById(modelMotorbikeId);
        if (!modelMotorbike) {
            return new ModelMotorbikeNotFoundError();
        }

        if (dataToUpdate.name) {
            const nameOrError = ValidString.from(dataToUpdate.name);
            if (nameOrError instanceof Error) {
                return nameOrError;
            }
            modelMotorbike.name = nameOrError;
        }

        if (dataToUpdate.brand) {
            const brandOrError = ValidString.from(dataToUpdate.brand);
            if (brandOrError instanceof Error) {
                return brandOrError;
            }
            modelMotorbike.brand = brandOrError;
        }

        if (dataToUpdate.maintenanceIntervalKm !== undefined) {
            modelMotorbike.maintenanceIntervalKm = dataToUpdate.maintenanceIntervalKm;
        }

        if (dataToUpdate.maintenanceIntervalTimeMonths !== undefined) {
            modelMotorbike.maintenanceIntervalTimeMonths = dataToUpdate.maintenanceIntervalTimeMonths;
        }

        const updatedModelMotorbike = await this.modelMotorbikeRepository.update(modelMotorbike);

        if (!updatedModelMotorbike) {
            return new ModelMotorbikeUpdateError();
        }

        return updatedModelMotorbike;
    }
}