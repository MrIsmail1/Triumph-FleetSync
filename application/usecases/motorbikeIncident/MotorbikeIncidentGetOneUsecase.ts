import { MotorbikeIncidentRepository } from "../../repositories/MotorbikeIncidentRepository";
import { MotorbikeIncidentNotFoundError } from "../../../domain/errors/MotorbikeIncidentNotFoundError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentGetOneUsecase {
    constructor(private motorbikeIncidentRepository: MotorbikeIncidentRepository) {}

    async execute(incidentId: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const incident = await this.motorbikeIncidentRepository.findById(incidentId);
        if (!incident) {
            return new MotorbikeIncidentNotFoundError();
        }
        return incident;
    }
}
