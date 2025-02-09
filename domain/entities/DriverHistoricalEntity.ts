export class DriverHistoricalEntity {
    private constructor(
        public identifier: string,
        public driverId: string,
        public motorbikeId: string,
        public createdAt: Date,
        public updatedAt: Date,
        public driverFirstName?: string,
        public driverLastName?: string,
        public licencePlateMotorbike?: string,
        public colorMotorbike?: string
    ) {
    }

    public static create(
        driverId: string,
        motorbikeId: string,
    ): DriverHistoricalEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new DriverHistoricalEntity(
            identifier,
            driverId,
            motorbikeId,
            createdAt,
            updatedAt
        );
    }

    public static reconstitute(data: {
        id: string;
        driverId: string;
        motorbikeId: string;
        createdAt: Date;
        updatedAt: Date;
        driverFirstName?: string;
        driverLastName?: string;
        licencePlateMotorbike?: string;
        colorMotorbike?: string;
    }): DriverHistoricalEntity {
        return new DriverHistoricalEntity(
            data.id,
            data.driverId,
            data.motorbikeId,
            data.createdAt,
            data.updatedAt,
            data.driverFirstName,
            data.driverLastName,
            data.licencePlateMotorbike,
            data.colorMotorbike,
        );
    }
}
