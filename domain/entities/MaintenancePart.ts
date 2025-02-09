import { PositiveNumber } from "../types/PositiveNumber.ts";

export class MaintenancePart {
  private constructor(
    public identifier: string,
    public partId: string,
    public maintenanceId: string,
    public quantityUsed: PositiveNumber,
    public cost: PositiveNumber,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  public static create(
    partId: string,
    maintenanceId: string,
    quantityUsed: PositiveNumber,
    cost: PositiveNumber
  ) {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();
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
