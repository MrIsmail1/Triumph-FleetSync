import {ValidString} from "../types/ValidString";
import {Email} from "../types/Email";

export class DriverEntity {
    private constructor(
        public identifier: string,
        public firstName: ValidString,
        public lastName: ValidString,
        public email: Email,
        public companyOrDealerShipId: string,
        public motorbikeId: string | null,
        public createdAt: Date,
        public updatedAt: Date,
        public userFirstName?: string,
        public userLastName?: string,
    ) {
    }

    public static create(firstName: ValidString, lastName: ValidString, email: Email, companyOrDealerShipId: string, motorbikeId: string | null): DriverEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new DriverEntity(identifier, firstName, lastName, email, companyOrDealerShipId, motorbikeId, createdAt, updatedAt);
    }

    public static reconstitute(data: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        companyOrDealerShipId: string,
        motorbikeId: string | null,
        createdAt: Date;
        updatedAt: Date;
        userFirstName?: string,
        userLastName?: string,
    }): DriverEntity {
        return new DriverEntity(
            data.id,
            ValidString.reconstitute(data.firstName),
            ValidString.reconstitute(data.lastName),
            Email.reconstitute(data.email),
            data.companyOrDealerShipId,
            data.motorbikeId,
            data.createdAt,
            data.updatedAt,
            data.userFirstName,
            data.userLastName,
        );
    }
}
