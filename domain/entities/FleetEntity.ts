import {ValidString} from "../types/ValidString";

export class FleetEntity {
    private constructor(
        public identifier: string,
        public companyOrDealerShipId: string,
        public name: ValidString,
        public createdAt: Date,
        public updatedAt: Date,
        public userFirstName?: string,
        public userLastName?: string,
    ) {
    }

    public static create(companyOrDealerShipId: string, name: ValidString): FleetEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new FleetEntity(identifier, companyOrDealerShipId, name, createdAt, updatedAt);
    }

    public static reconstitute(data: {
        id: string;
        companyOrDealerShipId: string,
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userFirstName?: string,
        userLastName?: string,
    }): FleetEntity {
        return new FleetEntity(
            data.id,
            data.companyOrDealerShipId,
            ValidString.reconstitute(data.name),
            data.createdAt,
            data.updatedAt,
            data.userFirstName,
            data.userLastName,
        );
    }
}

