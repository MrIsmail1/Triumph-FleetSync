import { PositiveNumber } from "../types/PositiveNumber";
import { PartPurchaseStatus } from "./../types/PartPurchaseStatus";

export class PartPurchase {
  private constructor(
    public identifier: string,
    public partId: string,
    public quantity: PositiveNumber,
    public costPerUnit: PositiveNumber,
    public totalCost: PositiveNumber,
    public status: PartPurchaseStatus,
    public orderDate: Date,
    public receivedDate: Date | null,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  public static create(
    partId: string,
    quantity: PositiveNumber,
    costPerUnit: PositiveNumber,
    totalCost: PositiveNumber,
    status: PartPurchaseStatus,
    orderDate: Date,
    receivedDate: Date | null
  ) {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();
    return new PartPurchase(
      identifier,
      partId,
      quantity,
      costPerUnit,
      totalCost,
      status,
      orderDate,
      receivedDate,
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
    receivedDate: string | null;
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
      data.receivedDate ? new Date(data.receivedDate) : null,
      new Date(data.createdAt),
      new Date(data.updatedAt)
    );
  }
}
