import { ValidString } from "../types/ValidString";
import { PositiveNumber } from "./../types/PositiveNumber";
import { MaintenancePart } from "./MaintenancePart";
import { PartPurchase } from "./PartPurchase";

export class SparePart {
  private constructor(
    public readonly identifier: string,
    public readonly name: ValidString,
    public readonly partNumber: ValidString,
    public readonly stockQuantity: PositiveNumber,
    public readonly reorderThreshold: PositiveNumber,
    public readonly purchases: PartPurchase[],
    public readonly usedInMaintenance: MaintenancePart[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly brand?: string
  ) {}

  public static create(
    identifier: string,
    name: ValidString,
    partNumber: ValidString,
    stockQuantity: PositiveNumber,
    reorderThreshold: PositiveNumber,
    purchases: PartPurchase[],
    usedInMaintenance: MaintenancePart[],
    createdAt: Date,
    updatedAt: Date,
    brand?: string
  ) {
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
