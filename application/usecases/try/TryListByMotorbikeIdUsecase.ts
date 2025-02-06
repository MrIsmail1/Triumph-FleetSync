import { TryRepository } from "../../repositories/TryRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class TryListByMotorbikeIdUsecase {
    constructor(private tryRepository: TryRepository) {}

    async execute(motorbikeId: string, currentUserRole: string) {

        if (currentUserRole === "technician" || currentUserRole === "company") {
            return new AccessDeniedError();
        }

        return await this.tryRepository.findAllByMotorbikeId(motorbikeId);
    }
}
