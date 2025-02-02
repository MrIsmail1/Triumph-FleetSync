import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class MotorbikeListUsecase {
    public constructor(
        private readonly motorbikeRepository: MotorbikeRepository) {
    }

    public async execute(currentUserIdentifier: string, currentUserRole: string) {

        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        if (currentUserRole === "admin") {
            return (await this.motorbikeRepository.findAll()) ?? [];
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            return await this.motorbikeRepository.findAllByCompanyOrDealershipId(currentUserIdentifier);
        }

        return new AccessDeniedError();
    }
}
