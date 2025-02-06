import { MotorbikeIncidentRepository } from "../../repositories/MotorbikeIncidentRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentListByMotorbikeIdUsecase {
    constructor(private motorbikeIncidentRepository: MotorbikeIncidentRepository) {}

    async execute(motorbikeId: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        return await this.motorbikeIncidentRepository.findAllByMotorbikeId(motorbikeId);
    }
}
