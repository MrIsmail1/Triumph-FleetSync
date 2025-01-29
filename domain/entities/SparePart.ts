import { ValidString } from "../types/ValidString";
import { PositiveNumber } from "./../types/PositiveNumber";
import { MaintenancePart } from "./MaintenancePart";
import { PartPurchase } from "./PartPurchase";

export class SparePart {
  private constructor(
    public identifier: string,
    public name: ValidString,
    public partNumber: ValidString,
    public stockQuantity: PositiveNumber,
    public reorderThreshold: PositiveNumber,
    public purchases: PartPurchase[],
    public usedInMaintenance: MaintenancePart[],
    public createdAt: Date,
    public updatedAt: Date,
    public brand?: string
  ) {}

  public static create(
    name: ValidString,
    partNumber: ValidString,
    stockQuantity: PositiveNumber,
    reorderThreshold: PositiveNumber,
    purchases: PartPurchase[],
    usedInMaintenance: MaintenancePart[],
    brand?: string
  ) {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();
    return new SparePart(
      identifier,
      name,
      partNumber,
      stockQuantity,
      reorderThreshold,
      purchases,
      usedInMaintenance,
      createdAt,
      updatedAt,
      brand
    );
  }
  public static reconstitute(data: {
    id: string;
    name: string;
    partNumber: string;
    stockQuantity: number;
    reorderThreshold: number;
    purchases: PartPurchase[];
    usedInMaintenance: MaintenancePart[];
    createdAt: string;
    updatedAt: string;
    brand?: string;
  }) {
    return new SparePart(
      data.id,
      ValidString.reconstitute(data.name),
      ValidString.reconstitute(data.partNumber),
      PositiveNumber.reconstitute(data.stockQuantity),
      PositiveNumber.reconstitute(data.reorderThreshold),
      data.purchases,
      data.usedInMaintenance,
      new Date(data.createdAt),
      new Date(data.updatedAt),
      data.brand
    );
  }
}
