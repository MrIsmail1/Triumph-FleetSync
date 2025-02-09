import { WarrantyEntity } from "../../domain/entities/WarrantyEntity";

export interface WarrantyRepository {
  findAll(): Promise<WarrantyEntity[]>; 
  findById(warrantyId: string): Promise<WarrantyEntity | null>;

  save(warranty: WarrantyEntity): Promise<void>;
  update(warranty: WarrantyEntity): Promise<WarrantyEntity | null>;
  delete(identifier: string): Promise<void>;
}
