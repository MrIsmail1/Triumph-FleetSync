import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { TryRepository } from "../../../application/repositories/TryRepository";
import { TryEntity } from "../../../domain/entities/TryEntity";

export class PrismaTryRepository implements TryRepository {
    constructor(private readonly database: Prisma) {}

    async findAll(): Promise<TryEntity[]> {
        const records = await this.database.try.findMany({
            include: {
                driver: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                motorbike: {
                    select: {
                        id: true,
                        licensePlate: true,
                        color: true,
                    },
                },
                dealership: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });

        return records.map(record => TryEntity.reconstitute({
            id: record.id,
            dealershipId: record.dealershipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            endDate: record.endDate,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
            dealershipFirstName: record.dealership.firstName,
            dealershipLastName: record.dealership.lastName,
        }));
    }

    async findAllByDriverId(driverId: string): Promise<TryEntity[]> {
        const records = await this.database.try.findMany({
            where: { driverId: driverId },
            include: {
                driver: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                motorbike: {
                    select: {
                        id: true,
                        licensePlate: true,
                        color: true,
                    },
                },
            },
        });

        return records.map(record => TryEntity.reconstitute({
            id: record.id,
            dealershipId: record.dealershipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            endDate: record.endDate,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
        }));
    }

    async findAllByMotorbikeId(motorbikeId: string): Promise<TryEntity[]> {
        const records = await this.database.try.findMany({
            where: { motorbikeId: motorbikeId },
            include: {
                driver: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                motorbike: {
                    select: {
                        id: true,
                        licensePlate: true,
                        color: true,
                    },
                },
            },
        });

        return records.map(record => TryEntity.reconstitute({
            id: record.id,
            dealershipId: record.dealershipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            endDate: record.endDate,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
        }));
    }

    async findAllByDealershipId(dealershipId: string): Promise<TryEntity[]> {
        const records = await this.database.try.findMany({
            where: { dealershipId: dealershipId },
            include: {
                driver: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                motorbike: {
                    select: {
                        id: true,
                        licensePlate: true,
                        color: true,
                    },
                },
            },
        });

        return records.map(record => TryEntity.reconstitute({
            id: record.id,
            dealershipId: record.dealershipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            endDate: record.endDate,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
        }));
    }

    async findById(identifier: string): Promise<TryEntity | null> {
        const record = await this.database.try.findUnique({
            where: { id: identifier }
        });

        return record ? TryEntity.reconstitute(record) : null;
    }

    async save(tryEntity: TryEntity): Promise<TryEntity> {
        const record = await this.database.try.create({
            data: {
                id: tryEntity.identifier,
                dealershipId: tryEntity.dealershipId,
                driverId: tryEntity.driverId,
                motorbikeId: tryEntity.motorbikeId,
                endDate: tryEntity.endDate,
                createdAt: tryEntity.createdAt,
                updatedAt: tryEntity.updatedAt
            }
        });

        return TryEntity.reconstitute(record);
    }

    async update(tryEntity: TryEntity): Promise<TryEntity> {
        const record = await this.database.try.update({
            where: { id: tryEntity.identifier },
            data: {
                motorbikeId: tryEntity.motorbikeId,
                driverId: tryEntity.driverId,
                endDate: new Date(tryEntity.endDate),
                updatedAt: new Date()
            }
        });

        return TryEntity.reconstitute(record);
    }

    async delete(identifier: string): Promise<void> {
        await this.database.try.delete({
            where: { id: identifier }
        });
    }
}
