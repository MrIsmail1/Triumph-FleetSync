import {TryRepository} from "../../repositories/TryRepository";
import {TryEntity} from "../../../domain/entities/TryEntity";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class TryCreateUsecase {
    constructor(private readonly tryRepository: TryRepository) {
    }

    async execute(currentUserIdentifier: string, driverId: string, motorbikeId: string, endDate: Date, currentUserRole: string) {

        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        const newTry = TryEntity.create(currentUserIdentifier, driverId, motorbikeId, endDate);
        return await this.tryRepository.save(newTry);
    }
}
