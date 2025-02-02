import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { MotorbikeRepository } from "../../../application/repositories/MotorbikeRepository";
import { MotorbikeEntity } from "../../../domain/entities/MotorbikeEntity";

export class PrismaMotorbikeRepository implements MotorbikeRepository {
    constructor(private readonly database: Prisma) {}

    async findAll(): Promise<MotorbikeEntity[]> {
        const records = await this.database.motorbike.findMany({
            include: {
                modelMotorbike: {
                    select: { name: true }
                },
                CompanyOrDealerShip: {
                    select: { firstName: true, lastName: true }
                },
                Driver: {
                    select: { firstName: true, lastName: true }
                },
                Fleet: {
                    select: { name: true }
                }
            }
        });

        return records.map(record => MotorbikeEntity.reconstitute({
            id: record.id,
            modelId: record.modelId,
            fleetId: record.fleetId,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            color: record.color,
            licensePlate: record.licensePlate,
            vehicleIdentificationNumber: record.vehicleIdentificationNumber,
            mileage: record.mileage,
            status: record.status,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            modelMotorbikeName: record.modelMotorbike?.name,
            companyOrDealerShipFirstName: record.CompanyOrDealerShip?.firstName,
            companyOrDealerShipLastName: record.CompanyOrDealerShip?.lastName,
            driverFirstName: record.Driver?.firstName,
            driverLastName: record.Driver?.lastName,
            fleetName: record.Fleet?.name,
        }));
    }

    async findAllByCompanyOrDealershipId(companyOrDealershipId: string): Promise<MotorbikeEntity[] | null> {
        const records = await this.database.motorbike.findMany({
            where: { companyOrDealerShipId: companyOrDealershipId },
            include: {
                modelMotorbike: {
                    select: { name: true }
                },
                Driver: {
                    select: { firstName: true, lastName: true }
                },
                Fleet: {
                    select: { name: true }
                }
            }
        });
        return records.length ? records.map(record => MotorbikeEntity.reconstitute({
            id: record.id,
            modelId: record.modelId,
            fleetId: record.fleetId,
            companyOrDealerShipId: record.companyOrDealerShipId,
            driverId: record.driverId,
            color: record.color,
            licensePlate: record.licensePlate,
            vehicleIdentificationNumber: record.vehicleIdentificationNumber,
            mileage: record.mileage,
            status: record.status,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            modelMotorbikeName: record.modelMotorbike?.name,
            driverFirstName: record.Driver?.firstName,
            driverLastName: record.Driver?.lastName,
            fleetName: record.Fleet?.name,
        })): null
    }

    async findById(motorbikeId: string): Promise<MotorbikeEntity | null> {
        const record = await this.database.motorbike.findUnique({
            where: { id: motorbikeId },
        });
        return record ? MotorbikeEntity.reconstitute(record) : null;
    }

    async findByFleetId(fleetId: string): Promise<MotorbikeEntity[] | null> {
        const records = await this.database.motorbike.findMany({
            where: { fleetId },
        });
        return records.length ? records.map(MotorbikeEntity.reconstitute) : null;
    }

    async findByIdAndCompanyOrDealershipId(motorbikeId: string, companyOrDealershipId: string): Promise<MotorbikeEntity | null> {
        const record = await this.database.motorbike.findFirst({
            where: { id: motorbikeId, companyOrDealerShipId: companyOrDealershipId },
        });
        return record ? MotorbikeEntity.reconstitute(record) : null;
    }

    async deleteByIdAndCompanyOrDealershipId(motorbikeId: string, companyOrDealershipId: string): Promise<void> {
        await this.database.motorbike.delete({
            where: { id: motorbikeId, companyOrDealerShipId: companyOrDealershipId },
        });
    }

    async save(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity> {
        const record = await this.database.motorbike.create({
            data: {
                id: motorbikeEntity.identifier,
                modelId: motorbikeEntity.modelId,
                fleetId: motorbikeEntity.fleetId ?? null,
                companyOrDealerShipId: motorbikeEntity.companyOrDealerShipId ?? null,
                driverId: motorbikeEntity.driverId ?? null,
                color: motorbikeEntity.color,
                licensePlate: motorbikeEntity.licensePlate.value,
                vehicleIdentificationNumber: motorbikeEntity.vehicleIdentificationNumber.value,
                mileage: motorbikeEntity.mileage,
                status: motorbikeEntity.status.value,
                createdAt: motorbikeEntity.createdAt,
                updatedAt: motorbikeEntity.updatedAt,
            },
        });
        return MotorbikeEntity.reconstitute(record);
    }

    async update(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity[]> {
        await this.database.motorbike.update({
            where: { id: motorbikeEntity.identifier },
            data: {
                modelId: motorbikeEntity.modelId,
                fleetId: motorbikeEntity.fleetId ?? null,
                companyOrDealerShipId: motorbikeEntity.companyOrDealerShipId ?? null,
                driverId: motorbikeEntity.driverId ?? null,
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
