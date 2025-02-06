import {MotorbikeIncidentRepository} from "../../repositories/MotorbikeIncidentRepository";
import {MotorbikeIncidentEntity} from "../../../domain/entities/MotorbikeIncidentEntity";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentCreateUsecase {
    constructor(private readonly motorbikeIncidentRepository: MotorbikeIncidentRepository) {
    }

    async execute(currentUserIdentifier: string, driverId: string, motorbikeId: string, incidentType: string, comment: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const newIncident = MotorbikeIncidentEntity.create(currentUserIdentifier, driverId, motorbikeId, incidentType, comment);
        return await this.motorbikeIncidentRepository.save(newIncident);
    }
}
