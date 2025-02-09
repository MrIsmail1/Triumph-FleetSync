import {DriverRepository} from "../../repositories/DriverRepository";
import {ValidString} from "../../../domain/types/ValidString";
import {Email} from "../../../domain/types/Email";
import {FrenchLicenseNumber} from "../../../domain/types/FrenchLicenseNumber";
import {FrenchTypeMotorbikeLicense} from "../../../domain/types/FrenchTypeMotorbikeLicense";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";
import {DriverNotFoundError} from "../../../domain/errors/DriverNotFoundError";
import {UnauthorizedActionError} from "../../../domain/errors/UnauthorizedActionError";

export class DriverUpdateUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {
    }

    public async execute(
        driverId: string,
        currentUserIdentifier: string,
        currentUserRole: string,
        dataToUpdate: Partial<{
            firstName: string;
            lastName: string;
            email: string;
            frenchLicenseNumber: string;
            dateDeliveryLicence: Date;
            dateExpirationLicense: Date;
            frenchTypeMotorbikeLicense: string;
            restrictionConditions: string;
            experience: string;
        }>
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

        if (dataToUpdate.frenchLicenseNumber) {
            const licenseNumberOrError = FrenchLicenseNumber.from(dataToUpdate.frenchLicenseNumber);
            if (licenseNumberOrError instanceof Error) return licenseNumberOrError;
            driver.frenchLicenseNumber = licenseNumberOrError;
        }

        if (dataToUpdate.dateDeliveryLicence !== undefined) {
            driver.dateDeliveryLicence = new Date(dataToUpdate.dateDeliveryLicence);
        }

        if (dataToUpdate.dateExpirationLicense !== undefined) {
            driver.dateExpirationLicense = new Date(dataToUpdate.dateExpirationLicense);
        }

        if (dataToUpdate.frenchTypeMotorbikeLicense) {
            const licenseTypeOrError = FrenchTypeMotorbikeLicense.from(dataToUpdate.frenchTypeMotorbikeLicense);
            if (licenseTypeOrError instanceof Error) return licenseTypeOrError;
            driver.frenchTypeMotorbikeLicense = licenseTypeOrError;
        }

        if (dataToUpdate.restrictionConditions) {
            const restrictionConditionsOrError = ValidString.from(dataToUpdate.restrictionConditions);
            if (restrictionConditionsOrError instanceof Error) return restrictionConditionsOrError;
            driver.restrictionConditions = restrictionConditionsOrError;
        }

        if (dataToUpdate.experience) {
            const experienceOrError = ValidString.from(dataToUpdate.experience);
            if (experienceOrError instanceof Error) return experienceOrError;
            driver.experience = experienceOrError;
        }

        return await this.driverRepository.update(driver);
    }
}
