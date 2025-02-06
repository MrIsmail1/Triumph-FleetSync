import {MotorbikeIncidentRepository} from "../../repositories/MotorbikeIncidentRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeIncidentListUsecase {
    constructor(private motorbikeIncidentRepository: MotorbikeIncidentRepository) {
    }


    async execute(currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return await this.motorbikeIncidentRepository.findAll();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.motorbikeIncidentRepository.findAllByCompanyOrDealerShipId(currentUserIdentifier);
        }
    }
}
