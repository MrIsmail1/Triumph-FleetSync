import { SparePart } from "../../domain/entities/SparePart";

export interface SparePartRepository {
  save(sparePart: SparePart): Promise<SparePart>;
  findAll(filters?: {
    name?: string;
    partNumber?: string;
    brand?: string;
    stockQuantity?: number;
    reorderThreshold?: number;
  }): Promise<SparePart[]>;
  findById(identifier: string): Promise<SparePart | null>;
  update(sparePart: SparePart): Promise<SparePart>;
  delete(identifier: string): Promise<void>;
}
