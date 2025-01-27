import { PositiveNumber } from "../types/PositiveNumber";
import { PartPurchaseStatus } from "./../types/PartPurchaseStatus";

export class PartPurchase {
  private constructor(
    public readonly identifier: string,
    public readonly partId: string,
    public readonly quantity: PositiveNumber,
    public readonly costPerUnit: PositiveNumber,
    public readonly totalCost: PositiveNumber,
    public readonly status: PartPurchaseStatus,
    public readonly orderDate: Date,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}

  public static create(
    identifier: string,
    partId: string,
    quantity: PositiveNumber,
    costPerUnit: PositiveNumber,
    totalCost: PositiveNumber,
    status: PartPurchaseStatus,
    orderDate: Date,
    createdAt: Date,
    updatedAt: Date
  ) {
    return new PartPurchase(
      identifier,
      partId,
      quantity,
      costPerUnit,
      totalCost,
      status,
      orderDate,
      createdAt,
      updatedAt
    );
  }

  public static reconstitute(data: {
    id: string;
    partId: string;
    quantity: number;
    costPerUnit: number;
    totalCost: number;
    status: PartPurchaseStatus;
    orderDate: string;
    createdAt: string;
    updatedAt: string;
  }) {
    return new PartPurchase(
      data.id,
      data.partId,
      PositiveNumber.reconstitute(data.quantity),
      PositiveNumber.reconstitute(data.costPerUnit),
      PositiveNumber.reconstitute(data.totalCost),
      data.status,
      new Date(data.orderDate),
      new Date(data.createdAt),
      new Date(data.updatedAt)
    );
  }
}
