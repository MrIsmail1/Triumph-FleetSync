import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { DriverHistoricalRepository } from "../../../application/repositories/DriverHistoricalRepository";
import { DriverHistoricalEntity } from "../../../domain/entities/DriverHistoricalEntity";

export class PrismaDriverHistoricalRepository implements DriverHistoricalRepository {
    constructor(private readonly prisma: Prisma) {}

    public async findAll(): Promise<DriverHistoricalEntity[]> {
        const histories = await this.prisma.driverHistorical.findMany({
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

        return histories.map(record => DriverHistoricalEntity.reconstitute({
            id: record.id,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
        }));
    }

    public async findAllByDriverId(driverId: string): Promise<DriverHistoricalEntity[]> {
        const histories = await this.prisma.driverHistorical.findMany({
            where: { driverId },
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

        return histories.map(record => DriverHistoricalEntity.reconstitute({
            id: record.id,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
        }));
    }

    public async findById(identifier: string): Promise<DriverHistoricalEntity | null> {
        const history = await this.prisma.driverHistorical.findUnique({
            where: { id: identifier },
        });

        return history ? DriverHistoricalEntity.reconstitute(history) : null;
    }

    public async save(driverHistoryEntity: DriverHistoricalEntity): Promise<DriverHistoricalEntity> {
        const history = await this.prisma.driverHistorical.create({
            data: {
                id: driverHistoryEntity.identifier,
                driverId: driverHistoryEntity.driverId,
                motorbikeId: driverHistoryEntity.motorbikeId,
                createdAt: driverHistoryEntity.createdAt,
                updatedAt: driverHistoryEntity.updatedAt,
            },
        });

        return DriverHistoricalEntity.reconstitute(history);
    }

    public async delete(identifier: string): Promise<void> {
        await this.prisma.driverHistorical.delete({ where: { id: identifier } });
    }
}
