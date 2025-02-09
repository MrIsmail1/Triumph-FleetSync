import {DriverRepository} from "../../repositories/DriverRepository";
import {DriverEntity} from "../../../domain/entities/DriverEntity";
import {ValidString} from "../../../domain/types/ValidString";
import {Email} from "../../../domain/types/Email";
import {FrenchLicenseNumber} from "../../../domain/types/FrenchLicenseNumber";
import {FrenchTypeMotorbikeLicense} from "../../../domain/types/FrenchTypeMotorbikeLicense";
import {AccessDeniedError} from "../../../domain/errors/AccessDeniedError";

export class DriverCreateUsecase {
    public constructor(private readonly driverRepository: DriverRepository) {
    }

    public async execute(
        firstName: string,
        lastName: string,
        email: string,
        companyOrDealerShipId: string,
        motorbikeId: string | null,
        frenchLicenseNumber: string,
        dateDeliveryLicence: Date,
        dateExpirationLicense: Date,
        frenchTypeMotorbikeLicense: string,
        restrictionConditions: string,
        experience: string,
        currentUserRole: string
    ) {
        if (currentUserRole === "technician") {
            return new AccessDeniedError();
        }

        const firstNameOrError = ValidString.from(firstName);
        const lastNameOrError = ValidString.from(lastName);
        const emailOrError = Email.from(email);
        const frenchLicenseNumberOrError = FrenchLicenseNumber.from(frenchLicenseNumber);
        const typeLicenseOrError = FrenchTypeMotorbikeLicense.from(frenchTypeMotorbikeLicense);
        const restrictionConditionsOrError = ValidString.from(restrictionConditions);
        const experienceOrError = ValidString.from(experience);

        if (firstNameOrError instanceof Error) return firstNameOrError;
        if (lastNameOrError instanceof Error) return lastNameOrError;
        if (emailOrError instanceof Error) return emailOrError;
        if (frenchLicenseNumberOrError instanceof Error) return frenchLicenseNumberOrError;
        if (typeLicenseOrError instanceof Error) return typeLicenseOrError;
        if (restrictionConditionsOrError instanceof Error) return restrictionConditionsOrError;
        if (experienceOrError instanceof Error) return experienceOrError;

        const newDriver = DriverEntity.create(
            firstNameOrError,
            lastNameOrError,
            emailOrError,
            companyOrDealerShipId,
            motorbikeId,
            frenchLicenseNumberOrError,
            dateDeliveryLicence,
            dateExpirationLicense,
            typeLicenseOrError,
            restrictionConditionsOrError,
            experienceOrError
        );

        return await this.driverRepository.save(newDriver);
    }
}
