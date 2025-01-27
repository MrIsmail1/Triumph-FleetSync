import { PositiveNumber } from "../types/PositiveNumber";

export class MaintenancePart {
  private constructor(
    public readonly identifier: string,
    public readonly partId: string,
    public readonly maintenanceId: string,
    public readonly quantityUsed: PositiveNumber,
    public readonly cost: PositiveNumber,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  public static create(
    identifier: string,
    partId: string,
    maintenanceId: string,
    quantityUsed: PositiveNumber,
    cost: PositiveNumber,
    createdAt: Date,
    updatedAt: Date
  ) {
    return new MaintenancePart(
      identifier,
      partId,
      maintenanceId,
      quantityUsed,
      cost,
      createdAt,
      updatedAt
    );
  }

  public static reconstitute(data: {
    id: string;
    partId: string;
    maintenanceId: string;
    quantityUsed: number;
    cost: number;
    createdAt: string;
    updatedAt: string;
  }) {
    return new MaintenancePart(
      data.id,
      data.partId,
      data.maintenanceId,
      PositiveNumber.reconstitute(data.quantityUsed),
      PositiveNumber.reconstitute(data.cost),
      new Date(data.createdAt),
      new Date(data.updatedAt)
    );
  }
}
