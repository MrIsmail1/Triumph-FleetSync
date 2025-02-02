import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {MotorbikeNotFoundError} from "../../../domain/errors/MotorbikeNotFoundError";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeGetOneUsecase {
    public constructor(
        private readonly motorbikeRepository: MotorbikeRepository) {
    }

    public async execute(motorbikeId: string, currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const motorbike = await this.motorbikeRepository.findById(motorbikeId);
        if (!motorbike) {
            return new MotorbikeNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.motorbikeRepository.findByIdAndCompanyOrDealershipId(motorbikeId, currentUserIdentifier);
        }

        if (currentUserRole === "admin") {
            return await this.motorbikeRepository.findById(motorbikeId);
        }

        return new AccessDeniedError();
    }
}
