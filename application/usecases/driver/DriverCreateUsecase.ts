import {DriverRepository} from "../../repositories/DriverRepository";
import {DriverEntity} from "../../../domain/entities/DriverEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {Email} from "../../../domain/types/Email";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class DriverCreateUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {}

    public async execute(firstName: string, lastName: string, email: string, companyOrDealerShipId: string, motorbikeId: string | null, currentUserRole: string) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const firstNameOrError = ValidString.from(firstName);
        const lastNameOrError = ValidString.from(lastName);
        const emailOrError = Email.from(email);

        if (firstNameOrError instanceof Error) return firstNameOrError;
        if (lastNameOrError instanceof Error) return lastNameOrError;
        if (emailOrError instanceof Error) return emailOrError;

        const newDriver = DriverEntity.create(firstNameOrError, lastNameOrError, emailOrError, companyOrDealerShipId, motorbikeId);
        return await this.driverRepository.save(newDriver);
    }
}