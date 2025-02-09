import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { MotorbikeIncidentRepository } from "../../../application/repositories/MotorbikeIncidentRepository";
import { MotorbikeIncidentEntity } from "../../../domain/entities/MotorbikeIncidentEntity";

export class PrismaMotorbikeIncidentRepository implements MotorbikeIncidentRepository {
    constructor(private readonly database: Prisma) {}

    async findAll(): Promise<MotorbikeIncidentEntity[]> {
        const records = await this.database.motorbikeIncident.findMany({
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
                        vehicleIdentificationNumber: true,
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

        return records.map(record => MotorbikeIncidentEntity.reconstitute({
            id: record.id,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            incidentType: record.incidentType,
            comment: record.comment,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
            vinMotorbike: record.motorbike.vehicleIdentificationNumber,
            dealershipFirstName: record.dealership.firstName,
            dealershipLastName: record.dealership.lastName,
        }));
    }

    async findAllByCompanyOrDealerShipId(dealershipId: string): Promise<MotorbikeIncidentEntity[]> {
        const records = await this.database.motorbikeIncident.findMany({
            where: { companyOrDealerShipId: dealershipId },
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
                        vehicleIdentificationNumber: true,
                    },
                },
            },
        });

        return records.map(record => MotorbikeIncidentEntity.reconstitute({
            id: record.id,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            incidentType: record.incidentType,
            comment: record.comment,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
            vinMotorbike: record.motorbike.vehicleIdentificationNumber,
        }));
    }

    async findAllByDriverId(driverId: string): Promise<MotorbikeIncidentEntity[]> {
        const records = await this.database.motorbikeIncident.findMany({
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
                        vehicleIdentificationNumber: true,
                    },
                },
            },
        });

        return records.map(record => MotorbikeIncidentEntity.reconstitute({
            id: record.id,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            incidentType: record.incidentType,
            comment: record.comment,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
            vinMotorbike: record.motorbike.vehicleIdentificationNumber,
        }));
    }

    async findAllByMotorbikeId(motorbikeId: string): Promise<MotorbikeIncidentEntity[]> {
        const records = await this.database.motorbikeIncident.findMany({
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
                        vehicleIdentificationNumber: true,
                    },
                },
            },
        });

        return records.map(record => MotorbikeIncidentEntity.reconstitute({
            id: record.id,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            motorbikeId: record.motorbikeId,
            incidentType: record.incidentType,
            comment: record.comment,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            driverFirstName: record.driver.firstName,
            driverLastName: record.driver.lastName,
            licencePlateMotorbike: record.motorbike.licensePlate,
            colorMotorbike: record.motorbike.color,
            vinMotorbike: record.motorbike.vehicleIdentificationNumber,
        }));
    }

    async findById(identifier: string): Promise<MotorbikeIncidentEntity | null> {
        const record = await this.database.motorbikeIncident.findUnique({
            where: { id: identifier },
        });

        return record ? MotorbikeIncidentEntity.reconstitute(record) : null;
    }

    async save(incidentEntity: MotorbikeIncidentEntity): Promise<MotorbikeIncidentEntity> {
        const record = await this.database.motorbikeIncident.create({
            data: {
                id: incidentEntity.identifier,
                companyOrDealerShipId: incidentEntity.companyOrDealerShipId,
                driverId: incidentEntity.driverId,
                motorbikeId: incidentEntity.motorbikeId,
                incidentType: incidentEntity.incidentType,
                comment: incidentEntity.comment,
                createdAt: incidentEntity.createdAt,
                updatedAt: incidentEntity.updatedAt,
            },
        });

        return MotorbikeIncidentEntity.reconstitute(record);
    }

    async update(incidentEntity: MotorbikeIncidentEntity): Promise<MotorbikeIncidentEntity> {
        const record = await this.database.motorbikeIncident.update({
            where: { id: incidentEntity.identifier },
            data: {
                motorbikeId: incidentEntity.motorbikeId,
                driverId: incidentEntity.driverId,
                incidentType: incidentEntity.incidentType,
                comment: incidentEntity.comment,
                updatedAt: new Date(),
            },
        });

        return MotorbikeIncidentEntity.reconstitute(record);
    }

    async delete(identifier: string): Promise<void> {
        await this.database.motorbikeIncident.delete({
            where: { id: identifier },
        });
    }
}
