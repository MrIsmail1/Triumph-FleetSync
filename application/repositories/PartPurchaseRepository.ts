import { PartPurchase } from "../../domain/entities/PartPurchase.ts";

export interface PartPurchaseRepository {
  findById(identifier: string): Promise<PartPurchase | null>;
  save(partPurchase: PartPurchase): Promise<void>;
  update(partPurchase: PartPurchase): Promise<PartPurchase | null>;
  delete(identifier: string): Promise<void>;
}
