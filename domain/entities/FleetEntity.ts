import {ValidString} from "../types/ValidString";

export class FleetEntity {
    private constructor(
        public identifier: string,
        public clientId: string,
        public managerId: string,
        public name: ValidString,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    public static create(clientId: string, managerId: string, name: ValidString): FleetEntity {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new FleetEntity(identifier, clientId, managerId ,name, createdAt, updatedAt);
    }

    public static reconstitute(data: {
        id: string;
        clientId: string;
        managerId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }): FleetEntity {
        return new FleetEntity(
            data.id,
            data.clientId,
            data.managerId,
            ValidString.reconstitute(data.name),
            data.createdAt,
            data.updatedAt
        );
    }
}