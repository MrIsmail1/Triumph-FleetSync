export class MotorbikeIncidentEntity {
    private constructor(
        public identifier: string,
        public companyOrDealerShipId: string,
        public driverId: string,
        public motorbikeId: string,
        public incidentType: string,
        public comment: string,
        public createdAt: Date,
        public updatedAt: Date,
        public driverFirstName?: string,
        public driverLastName?: string,
        public licencePlateMotorbike?: string,
        public colorMotorbike?: string,
        public vinMotorbike?: string,
        public dealershipFirstName?: string,
        public dealershipLastName?: string,
    ) {
    }

    public static create(
        companyOrDealerShipId: string,
        driverId: string,
        motorbikeId: string,
        incidentType: string,
        comment: string
    ): MotorbikeIncidentEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new MotorbikeIncidentEntity(
            identifier,
            companyOrDealerShipId,
            driverId,
            motorbikeId,
            incidentType,
            comment,
            createdAt,
            updatedAt
        );
    }

    public static reconstitute(data: {
        id: string;
        companyOrDealerShipId: string;
        driverId: string;
        motorbikeId: string;
        incidentType: string;
        comment: string;
        createdAt: Date;
        updatedAt: Date;
        driverFirstName?: string;
        driverLastName?: string;
        licencePlateMotorbike?: string;
        colorMotorbike?: string;
        vinMotorbike?: string;
        dealershipFirstName?: string,
        dealershipLastName?: string,
    }): MotorbikeIncidentEntity {
        return new MotorbikeIncidentEntity(
            data.id,
            data.companyOrDealerShipId,
            data.driverId,
            data.motorbikeId,
            data.incidentType,
            data.comment,
            data.createdAt,
            data.updatedAt,
            data.driverFirstName,
            data.driverLastName,
            data.licencePlateMotorbike,
            data.colorMotorbike,
            data.vinMotorbike,
            data.dealershipFirstName,
            data.dealershipLastName,
        );
    }
}
