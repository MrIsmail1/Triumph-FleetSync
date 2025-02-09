import { TryRepository } from "../../repositories/TryRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class TryListByDriverIdUsecase {
    constructor(private tryRepository: TryRepository) {}

    async execute(driverId: string, currentUserRole: string) {

        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        return await this.tryRepository.findAllByDriverId(driverId);
    }
}
