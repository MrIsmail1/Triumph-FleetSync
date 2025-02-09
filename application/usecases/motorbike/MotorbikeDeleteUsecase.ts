import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {MotorbikeNotFoundError} from "../../../domain/errors/MotorbikeNotFoundError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeDeleteUsecase {
    constructor(
        private motorbikeRepository: MotorbikeRepository) {
    }

    async execute(currentUserIdentifier: string, motorbikeToDeleteId: string, currentUserRole: string) {

        if (currentUserRole !== "admin") {
            return new AccessDeniedError();
        }

        const motorbike = await this.motorbikeRepository.findById(motorbikeToDeleteId);
        if (!motorbike) {
            return new MotorbikeNotFoundError();
        }

        return await this.motorbikeRepository.delete(motorbikeToDeleteId);

    }
}
