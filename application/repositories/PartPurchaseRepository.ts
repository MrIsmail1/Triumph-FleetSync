import { PartPurchase } from "../../domain/entities/PartPurchase";

export interface PartPurchaseRepository {
  findById(identifier: string): Promise<PartPurchase | null>;
  save(partPurchase: PartPurchase): Promise<PartPurchase>;
  update(partPurchase: PartPurchase): Promise<PartPurchase>;
  delete(identifier: string): Promise<void>;
}
