import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";

export class MotorbikeListByFleetIdUsecase {

    public constructor(
        private readonly motorbikeRepository: MotorbikeRepository) {
    }

    public async execute(fleetId: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        return this.motorbikeRepository.findAllByFleetId(fleetId);
    }
}