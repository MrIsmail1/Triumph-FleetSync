import { MotorbikeIncidentRepository } from "../../repositories/MotorbikeIncidentRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentListByDriverIdUsecase {
    constructor(private motorbikeIncidentRepository: MotorbikeIncidentRepository) {}

    async execute(driverId: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        return await this.motorbikeIncidentRepository.findAllByDriverId(driverId);
    }
}
