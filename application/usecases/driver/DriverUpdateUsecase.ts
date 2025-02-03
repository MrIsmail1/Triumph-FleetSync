import {DriverRepository} from "../../repositories/DriverRepository";
import {ValidString} from "../../../domain/types/ValidString";
import {Email} from "../../../domain/types/Email";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverNotFoundError} from "../../../domain/errors/DriverNotFoundError";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";


export class DriverUpdateUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {}

    public async execute(
        driverId: string,
        currentUserIdentifier: string,
        currentUserRole: string,
        dataToUpdate: Partial<{ firstName: string; lastName: string; email: string }>
    ) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const driver = await this.driverRepository.findById(driverId);
        if (!driver) {
            return new DriverNotFoundError();
        }

        if (currentUserRole === "company" || currentUserRole === "dealership") {
            const userDriver = await this.driverRepository.findByIdAndCompanyOrDealershipId(driverId, currentUserIdentifier);
            if (userDriver === null) {
                return new UnauthorizedActionError();
            }
        }

        if (dataToUpdate.firstName) {
            const firstNameOrError = ValidString.from(dataToUpdate.firstName);
            if (firstNameOrError instanceof Error) return firstNameOrError;
            driver.firstName = firstNameOrError;
        }

        if (dataToUpdate.lastName) {
            const lastNameOrError = ValidString.from(dataToUpdate.lastName);
            if (lastNameOrError instanceof Error) return lastNameOrError;
            driver.lastName = lastNameOrError;
        }

        if (dataToUpdate.email) {
            const emailOrError = Email.from(dataToUpdate.email);
            if (emailOrError instanceof Error) return emailOrError;
            driver.email = emailOrError;
        }

        return await this.driverRepository.update(driver);
    }
}
