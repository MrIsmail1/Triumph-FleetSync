import { BreakdownRepository } from "../../../application/repositories/BreakdownRepository";
import { BreakdownEntity } from "../../../domain/entities/BreakdownEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaBreakdownRepository implements BreakdownRepository {
  public constructor(private readonly prisma: Prisma) {}

  /**
   * 🔍 Récupère toutes les pannes
   */
public async findAll(): Promise<BreakdownEntity[]> {

    const breakdowns = await this.prisma.breakdown.findMany({
        include: {
            motorbike: { select: { id: true } },
        },
    });

    return breakdowns.map(this.mapToEntity);
}
  public async findById(breakdownId: string): Promise<BreakdownEntity | null> {

    const breakdown = await this.prisma.breakdown.findUnique({
      where: { id: breakdownId },
      include: {
        companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    if (!breakdown) {
      return null;
    }

    return this.mapToEntity(breakdown);
  }

  public async findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<BreakdownEntity[]> {

    const breakdowns = await this.prisma.breakdown.findMany({
      where: { companyOrDealerShipId },
      include: {
        companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return breakdowns.map(this.mapToEntity);
  }

/**
 * 🔍 Récupère toutes les pannes pour une moto
 */
public async findAllByMotorbikeId(motorbikeId: string): Promise<BreakdownEntity[]> {

    const breakdowns = await this.prisma.breakdown.findMany({
        where: { motorbikeId },
        include: {
            companyOrDealerShip: { select: { id: true, firstName: true, lastName: true } },
        },
    });

    return breakdowns.map(this.mapToEntity);
}

  public async save(breakdown: BreakdownEntity): Promise<BreakdownEntity> {

    const savedBreakdown = await this.prisma.breakdown.create({
      data: {
        id: breakdown.identifier,
        companyOrDealerShipId: breakdown.companyOrDealerShipId,
        motorbikeId: breakdown.motorbikeId,
        description: breakdown.description.value,
        actionTaken: breakdown.actionTaken.value,
        resolved: breakdown.resolved,
        resolutionDate: breakdown.resolutionDate ?? null,
        createdAt: breakdown.createdAt,
        updatedAt: breakdown.updatedAt,
      },
    });

    return this.mapToEntity(savedBreakdown);
  }

  public async update(breakdown: BreakdownEntity): Promise<BreakdownEntity | null> {

    const updatedBreakdown = await this.prisma.breakdown.update({
      where: { id: breakdown.identifier },
      data: {
        description: breakdown.description.value,
        actionTaken: breakdown.actionTaken.value,
        resolved: breakdown.resolved,
        resolutionDate: breakdown.resolutionDate ?? null,
        updatedAt: new Date(),
      },
    });

    if (!updatedBreakdown) {
      return null;
    }

    return this.mapToEntity(updatedBreakdown);
  }

  public async delete(identifier: string): Promise<void> {

    const breakdownExists = await this.prisma.breakdown.findUnique({ where: { id: identifier } });
    if (!breakdownExists) {
      return;
    }

    await this.prisma.breakdown.delete({ where: { id: identifier } });

  }

  public async deleteByIdAndCompanyOrDealershipId(breakdownId: string, companyOrDealerShipId: string): Promise<void> {

    const breakdownExists = await this.prisma.breakdown.findUnique({
      where: { id: breakdownId, companyOrDealerShipId },
    });

    if (!breakdownExists) {
      console.warn("[PrismaBreakdownRepository] ❌ Impossible de supprimer, panne non trouvée pour cet utilisateur", {
        breakdownId,
        companyOrDealerShipId,
      });
      return;
    }

    await this.prisma.breakdown.delete({
      where: { id: breakdownId },
    });

  }

  private mapToEntity(breakdown: any): BreakdownEntity {
    return BreakdownEntity.reconstitute({
      id: breakdown.id,
      companyOrDealerShipId: breakdown.companyOrDealerShipId,
      companyOrDealerShipUserFirstName: breakdown.companyOrDealerShip?.firstName,
      companyOrDealerShipuserLastName: breakdown.companyOrDealerShip?.lastName,
      description: breakdown.description,
      actionTaken: breakdown.actionTaken,
      resolved: breakdown.resolved,
      motorbikeId: breakdown.motorbikeId,
      resolutionDate: breakdown.resolutionDate ?? undefined,
      createdAt: breakdown.createdAt,
      updatedAt: breakdown.updatedAt,
    });
  }
}
