import { WarrantyRepository } from "../../../application/repositories/WarrantyRepository";
import { WarrantyEntity } from "../../../domain/entities/WarrantyEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaWarrantyRepository implements WarrantyRepository {
  public constructor(private readonly prisma: Prisma) {}

  public async findAll(): Promise<WarrantyEntity[]> {
    const warranties = await this.prisma.warranty.findMany({
      include: { motorbike: true },
    });

    
    return warranties.map((warranty) =>
      WarrantyEntity.reconstitute({
        id: warranty.id,
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName,
        warrantyDetails: warranty.warrantyDetails,
        createdAt: warranty.createdAt,
        updatedAt: warranty.updatedAt,
        motorbikeId: warranty.motorbike.id,
      })
    );
  }

  public async findById(warrantyId: string): Promise<WarrantyEntity | null> {
    const warranty = await this.prisma.warranty.findUnique({
      where: { id: warrantyId },
      include: { motorbike: true },
    });

    return warranty
      ? WarrantyEntity.reconstitute({
          id: warranty.id,
          validFrom: warranty.validFrom,
          validUntil: warranty.validUntil,
          providerName: warranty.providerName,
          warrantyDetails: warranty.warrantyDetails,
          createdAt: warranty.createdAt,
          updatedAt: warranty.updatedAt,
          motorbikeId: warranty.motorbike.id
        })
      : null;
  }

  public async findByMotorbikeId(motorbikeId: string): Promise<WarrantyEntity[]> {
    const warranties = await this.prisma.warranty.findMany({
      where: { motorbikeId: motorbikeId },
      include: { motorbike: true },
    });

    return warranties.map((warranty) =>
      WarrantyEntity.reconstitute({
        id: warranty.id,
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName,
        warrantyDetails: warranty.warrantyDetails,
        createdAt: warranty.createdAt,
        updatedAt: warranty.updatedAt,
        motorbikeId: warranty.motorbike.id
      })
    );
  }

  public async findActiveWarrantyByMotorbikeId(motorbikeId: string): Promise<WarrantyEntity | null> {
    const warranty = await this.prisma.warranty.findFirst({
      where: {
        motorbikeId: motorbikeId,
        validUntil: { gte: new Date() },
      },
      orderBy: { validUntil: "asc" },
      include: { motorbike: true },
    });

    return warranty
      ? WarrantyEntity.reconstitute({
          id: warranty.id,
          validFrom: warranty.validFrom,
          validUntil: warranty.validUntil,
          providerName: warranty.providerName,
          warrantyDetails: warranty.warrantyDetails,
          createdAt: warranty.createdAt,
          updatedAt: warranty.updatedAt,
          motorbikeId: warranty.motorbike.id
        })
      : null;
  }

  public async findAllByCompanyOrDealershipId(companyOrDealershipId: string): Promise<WarrantyEntity[]> {
    const warranties = await this.prisma.warranty.findMany({
      where: {
        motorbike: {
          companyOrDealerShipId: companyOrDealershipId,
        },
      },
      include: { motorbike: true },
    });

    return warranties.map((warranty) =>
    WarrantyEntity.reconstitute({
        id: warranty.id,
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName,
        warrantyDetails: warranty.warrantyDetails,
        createdAt: warranty.createdAt,
        updatedAt: warranty.updatedAt,
        motorbikeId: warranty.motorbike?.id
    })
);

  }

public async save(warranty: WarrantyEntity): Promise<void> {
    // Vérifier si la moto existe
    const existingMotorbike = await this.prisma.motorbike.findUnique({
        where: { id: warranty.motorbikeId },
    });

    if (!existingMotorbike) {
        throw new Error(`La moto avec l'ID ${warranty.motorbikeId} n'existe pas.`);
    }

    // Sauvegarde de la garantie
    await this.prisma.warranty.create({
      data: {
        id: warranty.identifier,
        validFrom: warranty.validFrom,
        validUntil: warranty.validUntil,
        providerName: warranty.providerName.value,
        warrantyDetails: warranty.warrantyDetails.value,
        createdAt: warranty.createdAt,
        updatedAt: warranty.updatedAt,
        motorbikeId: warranty.motorbikeId,
      },
    });
}




public async update(warranty: WarrantyEntity): Promise<WarrantyEntity | null> {
    const updatedWarranty = await this.prisma.warranty.update({
        where: { id: warranty.identifier },
        data: {
            validFrom: new Date(warranty.validFrom),
            validUntil: new Date(warranty.validUntil),
            providerName: warranty.providerName.value,
            warrantyDetails: warranty.warrantyDetails.value,
            updatedAt: new Date(),
            motorbikeId: warranty.motorbikeId,
        },
        include: { motorbike: true },
    });

    return updatedWarranty
        ? WarrantyEntity.reconstitute({
            id: updatedWarranty.id,
            validFrom: updatedWarranty.validFrom,
            validUntil: updatedWarranty.validUntil,
            providerName: updatedWarranty.providerName,
            warrantyDetails: updatedWarranty.warrantyDetails,
            createdAt: updatedWarranty.createdAt,
            updatedAt: updatedWarranty.updatedAt,
            motorbikeId: updatedWarranty.motorbike.id
        })
        : null;
}


  public async delete(identifier: string): Promise<void> {
    await this.prisma.warranty.delete({
      where: { id: identifier },
    });
  }

  public async deleteByMotorbikeId(motorbikeId: string): Promise<void> {
    await this.prisma.warranty.deleteMany({
      where: { motorbikeId: motorbikeId },
    });
  }

  public async getLicensePlateByMotorbikeId(motorbikeId: string): Promise<string | null> {
    const motorbike = await this.prisma.motorbike.findUnique({
        where: { id: motorbikeId },
        select: { licensePlate: true }
    });

    return motorbike ? motorbike.licensePlate : null;
}

}
