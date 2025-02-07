import { SparePartRepository } from "../../../application/repositories/SparePartRepository.ts";
import { SparePart } from "../../../domain/entities/SparePart.ts";
import { SparePartModel } from "./../../database/mongo/sparePart.model.ts";

export class MongoSparePartRepository implements SparePartRepository {
  async save(sparePart: SparePart): Promise<SparePart> {
    const creatdSparePart = SparePartModel.create({
      _id: sparePart.identifier,
      name: sparePart.name.value,
      partNumber: sparePart.partNumber.value,
      stockQuantity: sparePart.stockQuantity.value,
      reorderThreshold: sparePart.reorderThreshold.value,
      purchases: sparePart.purchases,
      usedInMaintenance: sparePart.usedInMaintenance,
      brand: sparePart.brand,
    });
    return Promise.resolve(creatdSparePart);
  }
  async find(filters?: {
    _id?: string;
    name?: string;
    partNumber?: string;
    brand?: string;
    stockQuantity?: number;
    reorderThreshold?: number;
  }): Promise<SparePart[]> {
    const query: Record<string, any> = {};
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined && filters[key] !== null) {
          query[key] = filters[key];
        }
      });
    }
    const spareParts = await SparePartModel.find(query);
    return spareParts.map(SparePart.reconstitute);
  }
  async findById(identifier: string): Promise<SparePart | null> {
    const sparePart = await SparePartModel.findOne({ _id: identifier });
    return sparePart ? SparePart.reconstitute(sparePart) : null;
  }
  async update(sparePart: SparePart): Promise<SparePart> {
    await SparePartModel.updateOne(
      { _id: sparePart.identifier },
      {
        name: sparePart.name.value,
        partNumber: sparePart.partNumber.value,
        stockQuantity: sparePart.stockQuantity.value,
        reorderThreshold: sparePart.reorderThreshold.value,
        purchases: sparePart.purchases,
        usedInMaintenance: sparePart.usedInMaintenance,
        brand: sparePart.brand,
      }
    );
    return Promise.resolve(sparePart);
  }
  async delete(identifier: string): Promise<void> {
    await SparePartModel.deleteOne({ _id: identifier });
    return Promise.resolve();
  }
}
