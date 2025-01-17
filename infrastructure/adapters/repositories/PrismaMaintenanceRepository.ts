import { MaintenanceRepository } from "../../../application/repositories/MaintenanceRepository";
import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaMaintenanceRepository implements MaintenanceRepository {
  constructor(private readonly prisma: Prisma) {}

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
      breakdownId: record.breakdownId,
      warrantyId: record.warrantyId,
    });
  }

  async findAll(): Promise<MaintenanceEntity[]> {
    const records = await this.prisma.maintenance.findMany({
      include: { breakdown: true, warranty: true },
    });

    return records.map((record) =>
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
        breakdownId: record.breakdownId,
        warrantyId: record.warrantyId,
      })
    );
  }

  async update(maintenance: MaintenanceEntity): Promise<void> {
    await this.prisma.maintenance.update({
      where: { id: maintenance.identifier },
      data: {
        motorbikeId: maintenance.motorbikeId,
        updatedAt: maintenance.updatedAt,
        maintenanceDate: maintenance.maintenanceDate,
        mileageAtMaintenance: maintenance.mileageAtMaintenance,
        maintenanceType: maintenance.maintenanceType.value,
        maintenanceCost: maintenance.maintenanceCost,
        maintenanceDescription: maintenance.maintenanceDescription.value,
        breakdownId: maintenance.breakdownId,
        warrantyId: maintenance.warrantyId,
      },
    });
  }

  async delete(identifier: string): Promise<void> {
    await this.prisma.maintenance.delete({
      where: { id: identifier },
    });
  }
}
