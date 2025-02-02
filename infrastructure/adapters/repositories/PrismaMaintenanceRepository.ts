import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { MaintenanceRepository } from "../../../application/repositories/MaintenanceRepository";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaMaintenanceRepository implements MaintenanceRepository {
    constructor(private readonly prisma: Prisma) {}

    async findByCompanyOrDealershipId(
        companyOrDealershipId: string,
        filters?: { motorbikeId?: string; fromDate?: Date; toDate?: Date }
    ): Promise<MaintenanceEntity[]> {
        const maintenaces = await this.prisma.maintenance.findMany({
            where: {
                companyOrDealerShipId: companyOrDealershipId,
                motorbikeId: filters?.motorbikeId,
                maintenanceDate: {
                    gte: filters?.fromDate,
                    lte: filters?.toDate,
                },
            },
        });
        return maintenaces.map((maintenance: any) =>
            MaintenanceEntity.reconstitute({
                id: maintenance.id,
                motorbikeId: maintenance.motorbikeId,
                createdAt: maintenance.createdAt,
                updatedAt: maintenance.updatedAt,
                maintenanceDate: maintenance.maintenanceDate,
                mileageAtMaintenance: maintenance.mileageAtMaintenance,
                maintenanceType: maintenance.maintenanceType,
                maintenanceCost: maintenance.maintenanceCost,
                maintenanceDescription: maintenance.maintenanceDescription,
                companyOrDealerShipId: maintenance.companyOrDealerShipId,
                breakdownId: maintenance.breakdownId,
                warrantyId: maintenance.warrantyId,
            })
        );
    }

    async save(maintenance: MaintenanceEntity): Promise<void> {
        await this.prisma.maintenance.create({
            data: {
                id: maintenance.identifier,
                motorbikeId: maintenance.motorbikeId,
                createdAt: maintenance.createdAt,
                updatedAt: maintenance.updatedAt,
                maintenanceDate: maintenance.maintenanceDate,
                mileageAtMaintenance: maintenance.mileageAtMaintenance,
                maintenanceType: maintenance.maintenanceType.value,
                maintenanceCost: maintenance.maintenanceCost,
                maintenanceDescription: maintenance.maintenanceDescription.value,
                companyOrDealerShipId: maintenance.companyOrDealerShipId,
                breakdownId: maintenance.breakdownId,
                warrantyId: maintenance.warrantyId,
            },
        });
    }

    async findById(identifier: string): Promise<MaintenanceEntity | null> {
        const record = await this.prisma.maintenance.findUnique({
            where: { id: identifier },
            include: { breakdown: true, warranty: true },
        });

        if (!record) return null;

        return MaintenanceEntity.reconstitute({
            id: record.id,
            motorbikeId: record.motorbikeId,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            maintenanceDate: record.maintenanceDate,
            mileageAtMaintenance: record.mileageAtMaintenance,
            maintenanceType: record.maintenanceType,
            maintenanceCost: record.maintenanceCost,
            maintenanceDescription: record.maintenanceDescription,
            companyOrDealerShipId: record.companyOrDealerShipId,
            breakdownId: record.breakdownId,
            warrantyId: record.warrantyId,
        });
    }


    async findAll(): Promise<MaintenanceEntity[]> {
        const records = await this.prisma.maintenance.findMany({
            include: { breakdown: true, warranty: true },
        });

        return records.map((record: any) =>
            MaintenanceEntity.reconstitute({
                id: record.id,
                motorbikeId: record.motorbikeId,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt,
                maintenanceDate: record.maintenanceDate,
                mileageAtMaintenance: record.mileageAtMaintenance,
                maintenanceType: record.maintenanceType,
                maintenanceCost: record.maintenanceCost,
                maintenanceDescription: record.maintenanceDescription,
                companyOrDealerShipId: record.companyOrDealerShipId,
                breakdownId: record.breakdownId,
                warrantyId: record.warrantyId,
            })
        );
    }

    async findAllByClientId(companyOrDealerShipId: string): Promise<MaintenanceEntity[]> {
        const records = await this.prisma.maintenance.findMany({
            where: { companyOrDealerShipId },
            include: { breakdown: true, warranty: true },
        });

        return records.map((record: any) =>
            MaintenanceEntity.reconstitute({
                id: record.id,
                motorbikeId: record.motorbikeId,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt,
                maintenanceDate: record.maintenanceDate,
                mileageAtMaintenance: record.mileageAtMaintenance,
                maintenanceType: record.maintenanceType,
                maintenanceCost: record.maintenanceCost,
                maintenanceDescription: record.maintenanceDescription,
                companyOrDealerShipId: record.companyOrDealerShipId,
                breakdownId: record.breakdownId,
                warrantyId: record.warrantyId,
            })
        );
    }

    async update(maintenance: MaintenanceEntity): Promise<MaintenanceEntity | null> {
        const updatedRecord = await this.prisma.maintenance.update({
            where: { id: maintenance.identifier },
            data: {
                motorbikeId: maintenance.motorbikeId,
                updatedAt: maintenance.updatedAt,
                maintenanceDate: maintenance.maintenanceDate,
                mileageAtMaintenance: maintenance.mileageAtMaintenance,
                maintenanceType: maintenance.maintenanceType.value,
                maintenanceCost: maintenance.maintenanceCost,
                maintenanceDescription: maintenance.maintenanceDescription.value,
                companyOrDealerShipId: maintenance.companyOrDealerShipId,
                breakdownId: maintenance.breakdownId,
                warrantyId: maintenance.warrantyId,
            },
        });

        if (!updatedRecord) return null;

        return MaintenanceEntity.reconstitute({
            id: updatedRecord.id,
            motorbikeId: updatedRecord.motorbikeId,
            createdAt: updatedRecord.createdAt,
            updatedAt: updatedRecord.updatedAt,
            maintenanceDate: updatedRecord.maintenanceDate,
            mileageAtMaintenance: updatedRecord.mileageAtMaintenance,
            maintenanceType: updatedRecord.maintenanceType,
            maintenanceCost: updatedRecord.maintenanceCost,
            maintenanceDescription: updatedRecord.maintenanceDescription,
            companyOrDealerShipId: updatedRecord.companyOrDealerShipId,
            breakdownId: updatedRecord.breakdownId,
            warrantyId: updatedRecord.warrantyId,
        });
    }

    async delete(identifier: string): Promise<void> {
        await this.prisma.maintenance.delete({
            where: { id: identifier },
        });
    }
}
