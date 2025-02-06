import { TryRepository } from "../../repositories/TryRepository";
import { TryNotFoundError } from "../../../domain/errors/TryNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class TryDeleteUsecase {
    constructor(private tryRepository: TryRepository) {}

    async execute(tryId: string, currentUserRole: string) {

        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        const tryEntity = await this.tryRepository.findById(tryId);
        if (!tryEntity) {
            return new TryNotFoundError();
        }

        return await this.tryRepository.delete(tryId);
    }
}
