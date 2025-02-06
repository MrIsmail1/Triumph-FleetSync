export class TryEntity {
    private constructor(
        public identifier: string,
        public dealershipId: string,
        public driverId: string,
        public motorbikeId: string,
        public endDate: Date,
        public createdAt: Date,
        public updatedAt: Date,
        public driverFirstName?: string,
        public driverLastName?: string,
        public licencePlateMotorbike?: string,
        public colorMotorbike?: string,
        public dealershipFirstName?: string,
        public dealershipLastName?: string,
    ) {
    }

    public static create(dealershipId: string, driverId: string, motorbikeId: string, endDate: Date): TryEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new TryEntity(
            identifier,
            dealershipId,
            driverId,
            motorbikeId,
            endDate,
            createdAt,
            updatedAt
        );
    }

    public static reconstitute(data: {
        id: string;
        dealershipId: string;
        driverId: string;
        motorbikeId: string;
        endDate: Date;
        createdAt: Date;
        updatedAt: Date;
        driverFirstName?: string;
        driverLastName?: string;
        licencePlateMotorbike?: string;
        colorMotorbike?: string;
        dealershipFirstName?: string,
        dealershipLastName?: string,
    }): TryEntity {
        return new TryEntity(
            data.id,
            data.dealershipId,
            data.driverId,
            data.motorbikeId,
            data.endDate,
            data.createdAt,
            data.updatedAt,
            data.driverFirstName,
            data.driverLastName,
            data.licencePlateMotorbike,
            data.colorMotorbike,
            data.dealershipFirstName,
            data.dealershipLastName,
        );
    }
}
