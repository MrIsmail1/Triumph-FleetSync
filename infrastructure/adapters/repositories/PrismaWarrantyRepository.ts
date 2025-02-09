import { WarrantyRepository } from "../../../application/repositories/WarrantyRepository";
import { WarrantyEntity } from "../../../domain/entities/WarrantyEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaWarrantyRepository implements WarrantyRepository {
  public constructor(private readonly database: Prisma) {}

  public async findAll(): Promise<WarrantyEntity[]> {
    const warranties = await this.database.warranty.findMany();
    return warranties.map(WarrantyEntity.reconstitute);
  }

  public async findById(warrantyId: string): Promise<WarrantyEntity | null> {
    const warranty = await this.database.warranty.findUnique({
      where: { id: warrantyId },
    });
    return warranty ? WarrantyEntity.reconstitute(warranty) : null;
  }

  public async save(warranty: WarrantyEntity): Promise<void> {
    await this.database.warranty.create({
      data: {
        id: warranty.identifier,
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName.value,
        createdAt: warranty.createdAt,
        updatedAt: warranty.updatedAt,
      },
    });
    return Promise.resolve();
  }

  public async update(warranty: WarrantyEntity): Promise<WarrantyEntity | null> {
    const updatedWarranty = await this.database.warranty.update({
      where: { id: warranty.identifier },
      data: {
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName.value,
        updatedAt: new Date(),
      },
    });
    return updatedWarranty ? WarrantyEntity.reconstitute(updatedWarranty) : null;
  }

  public async delete(identifier: string): Promise<void> {
    await this.database.warranty.delete({
      where: { id: identifier },
    });
    return Promise.resolve();
  }
}
