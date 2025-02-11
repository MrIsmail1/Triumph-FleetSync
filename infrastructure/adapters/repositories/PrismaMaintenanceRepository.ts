import { Prisma } from "../../platforms/express/src/config/prisma.db";
import { MaintenanceRepository } from "../../../application/repositories/MaintenanceRepository";
import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";

export class PrismaMaintenanceRepository implements MaintenanceRepository {
  constructor(private readonly prisma: Prisma) {}

  /**
   * Trouver une maintenance par son identifiant unique
   */
  public async findById(identifier: string): Promise<MaintenanceEntity | null> {
    const maintenance = await this.prisma.maintenance.findUnique({
      where: { id: identifier },
      include: {
        motorbike: { select: { licensePlate: true } },
        companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return maintenance ? MaintenanceEntity.reconstitute(maintenance) : null;
  }

  /**
   * Récupérer toutes les maintenances avec filtres optionnels
   */
  public async findAll(filters?: {
    companyOrDealershipId?: string;
    motorbikeId?: string;
    fromDate?: Date;
    toDate?: Date;
  }): Promise<MaintenanceEntity[]> {

    const whereClause: any = {};
    if (filters?.companyOrDealershipId) whereClause.companyOrDealerShipId = filters.companyOrDealershipId;
    if (filters?.motorbikeId) whereClause.motorbikeId = filters.motorbikeId;
    if (filters?.fromDate || filters?.toDate) {
      whereClause.maintenanceDate = {
        gte: filters.fromDate,
        lte: filters.toDate,
      };
    }

    const maintenances = await this.prisma.maintenance.findMany({
      where: whereClause,
      include: {
        motorbike: { select: { licensePlate: true } },
        companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return maintenances.map(MaintenanceEntity.reconstitute);
  }

  /**
   * Trouver toutes les maintenances pour une entreprise ou concessionnaire
   */
  public async findByCompanyOrDealershipId(
    companyOrDealershipId: string,
    filters?: { motorbikeId?: string; fromDate?: Date; toDate?: Date }
  ): Promise<MaintenanceEntity[]> {

    const whereClause: any = { companyOrDealerShipId: companyOrDealershipId };
    if (filters?.motorbikeId) whereClause.motorbikeId = filters.motorbikeId;
    if (filters?.fromDate || filters?.toDate) {
      whereClause.maintenanceDate = {
        gte: filters.fromDate,
        lte: filters.toDate,
      };
    }

    const maintenances = await this.prisma.maintenance.findMany({
      where: whereClause,
      include: {
        motorbike: { select: { licensePlate: true } },
        companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return maintenances.map(MaintenanceEntity.reconstitute);
  }

  /**
   * Sauvegarder une nouvelle maintenance
   */
public async save(maintenance: MaintenanceEntity): Promise<void> {
    await this.prisma.maintenance.create({
        data: {
            id: maintenance.identifier,
            motorbikeId: maintenance.motorbikeId,
            companyOrDealerShipId: maintenance.companyOrDealerShipId,
            maintenanceDate: maintenance.maintenanceDate,
            mileageAtMaintenance: maintenance.mileageAtMaintenance,
            maintenanceType: maintenance.maintenanceType.value,
            maintenanceCost: maintenance.maintenanceCost,
            maintenanceDescription: maintenance.maintenanceDescription.value,
            breakdownId: maintenance.breakdownId,
            warrantyId: maintenance.warrantyId,
            createdAt: maintenance.createdAt,
            updatedAt: maintenance.updatedAt,
        },
    });
}


  public async update(maintenance: MaintenanceEntity): Promise<MaintenanceEntity | null> {
    const updatedMaintenance = await this.prisma.maintenance.update({
      where: { id: maintenance.identifier },
      data: {
        motorbikeId: maintenance.motorbikeId,
        companyOrDealerShipId: maintenance.companyOrDealerShipId,
        maintenanceDate: maintenance.maintenanceDate,
        mileageAtMaintenance: maintenance.mileageAtMaintenance,
        maintenanceType: maintenance.maintenanceType.value,
        maintenanceCost: maintenance.maintenanceCost,
        maintenanceDescription: maintenance.maintenanceDescription.value,
        breakdownId: maintenance.breakdownId,
        warrantyId: maintenance.warrantyId,
        updatedAt: new Date(),
      },
    });

    return updatedMaintenance ? MaintenanceEntity.reconstitute(updatedMaintenance) : null;
  }

  /**
   * Supprimer une maintenance par son ID
   */
  public async delete(identifier: string): Promise<void> {

    await this.prisma.maintenance.delete({ where: { id: identifier } });
  }

  /**
   * Supprimer une maintenance pour une entreprise spécifique
   */
  public async deleteByIdAndCompanyOrDealershipId(identifier: string, companyOrDealerShipId: string): Promise<void> {

    await this.prisma.maintenance.deleteMany({
      where: {
        id: identifier,
        companyOrDealerShipId,
      },
    });
  }
}
