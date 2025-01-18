import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";
import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";
import {Role} from "../../../domain/types/Role";

export class MotorbikeDeleteUsecase {
    constructor(private motorbikeRepository: MotorbikeRepository) {
    }

    async execute(userRole: Role, motorbikeToDeleteId: string) {
        if (userRole.value === "technician") {
            return new UnauthorizedActionError();
        }

        await this.motorbikeRepository.delete(motorbikeToDeleteId);

        return true;
    }
}