import { PartPurchaseRepository } from "../../../application/repositories/PartPurchaseRepository";
import { PartPurchase } from "../../../domain/entities/PartPurchase";
import { PartPurchaseModel } from "./../../platforms/deno-hono/database/mongo/partPurchase.model";

export class MongoPartPurchaseRepository implements PartPurchaseRepository {
  async findById(identifier: string): Promise<PartPurchase | null> {
    const foundPartPurchase = await PartPurchaseModel.findOne(identifier);
    return foundPartPurchase
      ? PartPurchase.reconstitute(foundPartPurchase)
      : null;
  }
  async save(partPurchase: PartPurchase): Promise<void> {
    await PartPurchaseModel.create({
      id: partPurchase.identifier,
      partId: partPurchase.partId,
      quantity: partPurchase.quantity.value,
      costPerUnit: partPurchase.costPerUnit.value,
      totalCost: partPurchase.totalCost.value,
      status: partPurchase.status,
      orderDate: partPurchase.orderDate,
      receivedDate: partPurchase.receivedDate,
    });
    return Promise.resolve();
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
