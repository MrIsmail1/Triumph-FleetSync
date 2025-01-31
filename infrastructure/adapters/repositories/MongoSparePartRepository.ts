import { SparePartRepository } from "../../../application/repositories/SparePartRepository.ts";
import { SparePart } from "../../../domain/entities/SparePart.ts";
import { SparePartModel } from "../../platforms/deno-hono/database/mongo/sparePart.model.ts";

export class MongoSparePartRepository implements SparePartRepository {
  save(sparePart: SparePart): Promise<SparePart> {
    throw new Error("Method not implemented.");
  }
  async findAll(filters?: {
    name?: string;
    partNumber?: string;
    brand?: string;
    stockQuantity?: number;
    reorderThreshold?: number;
  }): Promise<SparePart[]> {
    const spareParts = await SparePartModel.find(filters);
    return spareParts.map((sparePart) => {
      return SparePart.reconstitute({
        id: sparePart.identifier,
        name: sparePart.name,
        partNumber: sparePart.partNumber,
        stockQuantity: sparePart.stockQuantity,
        reorderThreshold: sparePart.reorderThreshold,
        purchases: sparePart.purchases,
        usedInMaintenance: sparePart.usedInMaintenance,
        createdAt: sparePart.createdAt,
        updatedAt: sparePart.updatedAt,
        brand: sparePart.brand,
      });
    });
  }
  async findById(identifier: string): Promise<SparePart | null> {
    const sparePart = await SparePartModel.findOne({ id: identifier });
    return Promise.resolve(sparePart);
  }
  async update(sparePart: SparePart): Promise<SparePart> {
    const updatedSparePart = await SparePartModel.updateOne(
      { id: sparePart.identifier },
      sparePart
    );
    return SparePart.reconstitute(updatedSparePart);
  }
  async delete(identifier: string): Promise<void> {
    await SparePartModel.deleteOne({ id: identifier });
    return Promise.resolve();
  }
}
