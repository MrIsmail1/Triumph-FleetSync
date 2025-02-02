import { PartPurchase } from "../../domain/entities/PartPurchase.ts";

export interface PartPurchaseRepository {
  findById(identifier: string): Promise<PartPurchase | null>;
  save(partPurchase: PartPurchase): Promise<PartPurchase>;
  update(partPurchase: PartPurchase): Promise<PartPurchase | null>;
  delete(identifier: string): Promise<void>;
  find(filters: {
    id?: string;
    partId?: string;
    status?: string;
    purchaseDate?: string;
    receivedDate?: string;
  }): Promise<PartPurchase[]>;
}
