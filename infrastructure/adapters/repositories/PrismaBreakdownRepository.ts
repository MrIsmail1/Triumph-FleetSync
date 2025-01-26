import { BreakdownRepository } from "../../../application/repositories/BreakdownRepository";
import { BreakdownEntity } from "../../../domain/entities/BreakdownEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaBreakdownRepository implements BreakdownRepository {
  public constructor(private readonly database: Prisma) {}

  public async findAll(): Promise<BreakdownEntity[]> {
    const breakdowns = await this.database.breakdown.findMany();
    return breakdowns.map(BreakdownEntity.reconstitute);
  }

  public async findById(breakdownId: string): Promise<BreakdownEntity | null> {
    const breakdown = await this.database.breakdown.findUnique({
      where: { id: breakdownId },
    });
    return breakdown ? BreakdownEntity.reconstitute(breakdown) : null;
  }

  public async save(breakdown: BreakdownEntity): Promise<void> {
    await this.database.breakdown.create({
      data: {
        id: breakdown.identifier,
        description: breakdown.description.value,
        createdAt: breakdown.createdAt,
        updatedAt: breakdown.updatedAt,
      },
    });
    return Promise.resolve();
  }

  public async update(breakdown: BreakdownEntity): Promise<BreakdownEntity | null> {
    const updatedBreakdown = await this.database.breakdown.update({
      where: { id: breakdown.identifier },
      data: {
        description: breakdown.description.value,
        updatedAt: new Date(),
      },
    });
    return updatedBreakdown ? BreakdownEntity.reconstitute(updatedBreakdown) : null;
  }

  public async delete(identifier: string): Promise<void> {
    await this.database.breakdown.delete({
      where: { id: identifier },
    });
    return Promise.resolve();
  }

  public async findAllByClientId(clientId: string): Promise<BreakdownEntity[]> {
  const breakdowns = await this.database.breakdown.findMany({
    where: { clientId },
  });
  return breakdowns.map(BreakdownEntity.reconstitute);
}

}
