import { PartPurchaseRepository } from "../../../application/repositories/PartPurchaseRepository.ts";
import { PartPurchase } from "../../../domain/entities/PartPurchase.ts";
import { PartPurchaseModel } from "./../../database/mongo/partPurchase.model.ts";

export class MongoPartPurchaseRepository implements PartPurchaseRepository {
  async find(filters: {
    id?: string;
    partId?: string;
    status?: string;
    purchaseDate?: string;
    receivedDate?: string;
  }): Promise<PartPurchase[]> {
    const query: Record<string, any> = {};
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined && filters[key] !== null) {
          query[key] = filters[key];
        }
      });
    }
    const spareParts = await PartPurchaseModel.find(query);
    return spareParts.map(PartPurchase.reconstitute);
  }
  async findById(identifier: string): Promise<PartPurchase | null> {
    const foundPartPurchase = await PartPurchaseModel.findOne(identifier);
    return foundPartPurchase
      ? PartPurchase.reconstitute(foundPartPurchase)
      : null;
  }
  async save(partPurchase: PartPurchase): Promise<PartPurchase> {
    const createdPartPurchase = await PartPurchaseModel.create({
      id: partPurchase.identifier,
      partId: partPurchase.partId,
      quantity: partPurchase.quantity.value,
      costPerUnit: partPurchase.costPerUnit.value,
      totalCost: partPurchase.totalCost.value,
      status: partPurchase.status,
      orderDate: partPurchase.orderDate,
      receivedDate: partPurchase.receivedDate,
    });
    return PartPurchase.reconstitute(createdPartPurchase);
  }
  async update(partPurchase: PartPurchase): Promise<PartPurchase | null> {
    const updatedPartPurchase = await PartPurchaseModel.updateOne(
      { id: partPurchase.identifier },
      {
        partId: partPurchase.partId,
        quantity: partPurchase.quantity.value,
        costPerUnit: partPurchase.costPerUnit.value,
        totalCost: partPurchase.totalCost.value,
        status: partPurchase.status,
        orderDate: partPurchase.orderDate,
        receivedDate: partPurchase.receivedDate,
      }
    );
    return updatedPartPurchase
      ? PartPurchase.reconstitute(updatedPartPurchase)
      : null;
  }
  async delete(identifier: string): Promise<void> {
    await PartPurchaseModel.deleteOne({ id: identifier });
    return Promise.resolve();
  }
}
