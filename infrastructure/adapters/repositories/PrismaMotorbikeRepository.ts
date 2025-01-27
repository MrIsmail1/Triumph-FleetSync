import { MotorbikeEntity } from "../../../domain/entities/MotorbikeEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";
import {MotorbikeRepository} from "../../../application/repositories/MotorbikeRepository";

export class PrismaMotorbikeRepository implements MotorbikeRepository {
    constructor(private readonly database: Prisma) {}

    async findAll(): Promise<MotorbikeEntity[]> {
        const records = await this.database.motorbike.findMany();

        return records.map((record) =>
            MotorbikeEntity.reconstitute({
                id: record.id,
                modelId: record.modelMotorbikeId,
                fleetId: record.fleetId,
                clientId: record.clientId,
                color: record.color,
                licensePlate: record.licensePlate,
                vehicleIdentificationNumber: record.vehicleIdentificationNumber,
                mileage: record.mileage,
                status: record.status,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt,
            })
        );
    }

    async findById(motorbikeId: string): Promise<MotorbikeEntity | null> {
        const record = await this.database.motorbike.findUnique({
            where: { id: motorbikeId },
        });

        if (!record) return null;

        return MotorbikeEntity.reconstitute({
            id: record.id,
            modelId: record.modelMotorbikeId,
            fleetId: record.fleetId,
            clientId: record.clientId,
            color: record.color,
            licensePlate: record.licensePlate,
            vehicleIdentificationNumber: record.vehicleIdentificationNumber,
            mileage: record.mileage,
            status: record.status,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
        });
    }

    async findByFleetId(fleetId: string): Promise<MotorbikeEntity[] | null> {
        const records = await this.database.motorbike.findMany({
            where: { fleetId },
        });

        if (!records.length) return null;

        return records.map((record) =>
            MotorbikeEntity.reconstitute({
                id: record.id,
                modelId: record.modelMotorbikeId,
                fleetId: record.fleetId,
                clientId: record.clientId,
                color: record.color,
                licensePlate: record.licensePlate,
                vehicleIdentificationNumber: record.vehicleIdentificationNumber,
                mileage: record.mileage,
                status: record.status,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt,
            })
        );
    }

    async findByClientId(clientId: string): Promise<MotorbikeEntity[] | null> {
        const records = await this.database.motorbike.findMany({
            where: { clientId },
        });

        if (!records.length) return null;

        return records.map((record) =>
            MotorbikeEntity.reconstitute({
                id: record.id,
                modelId: record.modelMotorbikeId,
                fleetId: record.fleetId,
                clientId: record.clientId,
                color: record.color,
                licensePlate: record.licensePlate,
                vehicleIdentificationNumber: record.vehicleIdentificationNumber,
                mileage: record.mileage,
                status: record.status,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt,
            })
        );
    }

    async save(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity> {
        const record = await this.database.motorbike.create({
            data: {
                id: motorbikeEntity.identifier,
                modelMotorbikeId: motorbikeEntity.modelId,
                fleetId: motorbikeEntity.fleetId,
                clientId: motorbikeEntity.clientId,
                color: motorbikeEntity.color,
                licensePlate: motorbikeEntity.licensePlate.value,
                vehicleIdentificationNumber: motorbikeEntity.vehicleIdentificationNumber.value,
                mileage: motorbikeEntity.mileage,
                status: motorbikeEntity.status.value,
                createdAt: motorbikeEntity.createdAt,
                updatedAt: motorbikeEntity.updatedAt,
            },
        });

        return MotorbikeEntity.reconstitute({
            id: record.id,
            modelId: record.modelMotorbikeId,
            fleetId: record.fleetId,
            clientId: record.clientId,
            color: record.color,
            licensePlate: record.licensePlate,
            vehicleIdentificationNumber: record.vehicleIdentificationNumber,
            mileage: record.mileage,
            status: record.status,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
        });
    }

    async update(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity[]> {
        await this.database.motorbike.update({
            where: { id: motorbikeEntity.identifier },
            data: {
                modelMotorbikeId: motorbikeEntity.modelId,
                fleetId: motorbikeEntity.fleetId,
                clientId: motorbikeEntity.clientId,
                color: motorbikeEntity.color,
                licensePlate: motorbikeEntity.licensePlate.value,
                vehicleIdentificationNumber: motorbikeEntity.vehicleIdentificationNumber.value,
                mileage: motorbikeEntity.mileage,
                status: motorbikeEntity.status.value,
                updatedAt: new Date(),
            },
        });

        return this.findAll();
    }

    async delete(motorbikeId: string): Promise<void> {
        await this.database.motorbike.delete({
            where: { id: motorbikeId },
        });
    }
}
