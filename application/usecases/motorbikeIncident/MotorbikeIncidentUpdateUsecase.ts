import { MotorbikeIncidentRepository } from "../../repositories/MotorbikeIncidentRepository";
import { MotorbikeIncidentNotFoundError } from "../../../domain/errors/MotorbikeIncidentNotFoundError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentUpdateUsecase {
    constructor(private motorbikeIncidentRepository: MotorbikeIncidentRepository) {}

    async execute(incidentId: string, currentUserRole:string, dataToUpdate: Partial<{ motorbikeId: string, driverId: string, incidentType: string; comment: string }>) {

        if (currentUserRole !== "admin") {
            return new AccessDeniedError();
        }

        const incident = await this.motorbikeIncidentRepository.findById(incidentId);
        if (!incident) {
            return new MotorbikeIncidentNotFoundError();
        }

        if (dataToUpdate.motorbikeId) {
            incident.motorbikeId = dataToUpdate.motorbikeId;
        }

        if (dataToUpdate.driverId) {
            incident.driverId = dataToUpdate.driverId;
        }

        if (dataToUpdate.incidentType) {
            incident.incidentType = dataToUpdate.incidentType;
        }

        if (dataToUpdate.comment) {
            incident.comment = dataToUpdate.comment;
        }

        return await this.motorbikeIncidentRepository.update(incident);
    }
}
