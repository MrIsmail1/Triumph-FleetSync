import { TryRepository } from "../../repositories/TryRepository";
import { TryNotFoundError } from "../../../domain/errors/TryNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class TryUpdateUsecase {
    constructor(private tryRepository: TryRepository) {}

    async execute(tryId: string, dataToUpdate: Partial<{ motorbikeId: string, driverId: string, endDate: Date }>, currentUserRole: string) {
        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        const tryEntity = await this.tryRepository.findById(tryId);
        if (!tryEntity) {
            return new TryNotFoundError();
        }

        if (dataToUpdate.motorbikeId) {
            tryEntity.motorbikeId = dataToUpdate.motorbikeId;
        }

        if (dataToUpdate.driverId) {
            tryEntity.driverId = dataToUpdate.driverId;
        }

        if (dataToUpdate.endDate) {
            tryEntity.endDate = new Date(dataToUpdate.endDate);
        }


        return await this.tryRepository.update(tryEntity);
    }
}
