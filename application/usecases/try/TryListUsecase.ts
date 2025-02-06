import {TryRepository} from "../../repositories/TryRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class TryListUsecase {
    constructor(private tryRepository: TryRepository) {
    }

    async execute(currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return await this.tryRepository.findAll();
        }

        if (currentUserRole === "dealership") {
            return await this.tryRepository.findAllByDealershipId(currentUserIdentifier);

        }
    }
}
