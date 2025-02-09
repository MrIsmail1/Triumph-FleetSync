import { ValidString } from "../types/ValidString";
import { Email } from "../types/Email";
import {FrenchLicenseNumber} from "../types/FrenchLicenseNumber";
import {FrenchTypeMotorbikeLicense} from "../types/FrenchTypeMotorbikeLicense";

export class DriverEntity {
    private constructor(
        public identifier: string,
        public firstName: ValidString,
        public lastName: ValidString,
        public email: Email,
        public companyOrDealerShipId: string,
        public motorbikeId: string | null,

        public frenchLicenseNumber: FrenchLicenseNumber,
        public dateDeliveryLicence: Date,
        public dateExpirationLicense: Date,
        public frenchTypeMotorbikeLicense: FrenchTypeMotorbikeLicense,
        public restrictionConditions: ValidString,
        public experience: ValidString,

        public createdAt: Date,
        public updatedAt: Date,

        // FLotte
        public userFirstName?: string,
        public userLastName?: string,
    ) {}

    public static create(
        firstName: ValidString,
        lastName: ValidString,
        email: Email,
        companyOrDealerShipId: string,
        motorbikeId: string | null,
        frenchLicenseNumber: FrenchLicenseNumber,
        dateDeliveryLicence: Date,
        dateExpirationLicense: Date,
        frenchTypeMotorbikeLicense: FrenchTypeMotorbikeLicense,
        restrictionConditions: ValidString,
        experience: ValidString
    ): DriverEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new DriverEntity(
            identifier,
            firstName,
            lastName,
            email,
            companyOrDealerShipId,
            motorbikeId,
            frenchLicenseNumber,
            dateDeliveryLicence,
            dateExpirationLicense,
            frenchTypeMotorbikeLicense,
            restrictionConditions,
            experience,
            createdAt,
            updatedAt
        );
    }

    public static reconstitute(data: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        companyOrDealerShipId: string;
        motorbikeId: string | null;
        frenchLicenseNumber: string;
        dateDeliveryLicence: Date;
        dateExpirationLicense: Date;
        frenchTypeMotorbikeLicense: string;
        restrictionConditions: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
        userFirstName?: string;
        userLastName?: string;
        motorbikeLicence? : string;
        motorbikeColor? : string;

    }): DriverEntity {
        return new DriverEntity(
            data.id,
            ValidString.reconstitute(data.firstName),
            ValidString.reconstitute(data.lastName),
            Email.reconstitute(data.email),
            data.companyOrDealerShipId,
            data.motorbikeId,
            FrenchLicenseNumber.reconstitute(data.frenchLicenseNumber),
            data.dateDeliveryLicence,
            data.dateExpirationLicense,
            FrenchTypeMotorbikeLicense.reconstitute(data.frenchTypeMotorbikeLicense),
            ValidString.reconstitute(data.restrictionConditions),
            ValidString.reconstitute(data.experience),
            data.createdAt,
            data.updatedAt,
            data.userFirstName,
            data.userLastName,
        );
    }
}
