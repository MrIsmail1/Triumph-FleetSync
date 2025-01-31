import { MaintenancePart } from "../../../domain/entities/MaintenancePart";
import { MaintenancePartModel } from "../../platforms/deno-hono/database/mongo/maintenancePart.model";
import { MaintenancePartRepository } from "./../../../application/repositories/MaintenancePartRepository";

export class MongoMaintenancePartRepository
  implements MaintenancePartRepository
{
  async findById(identifier: string): Promise<MaintenancePart | null> {
    const foundMaintenancePart = await MaintenancePartModel.findOne(identifier);
    return foundMaintenancePart
      ? MaintenancePart.reconstitute(foundMaintenancePart)
      : null;
  }
  async save(maintenancePart: MaintenancePart): Promise<void> {
    await MaintenancePartModel.create({
      id: maintenancePart.identifier,
      partId: maintenancePart.partId,
      maintenanceId: maintenancePart.maintenanceId,
      quantityUsed: maintenancePart.quantityUsed.value,
      cost: maintenancePart.cost.value,
    });
    return Promise.resolve();
  }
  async update(
    maintenancePart: MaintenancePart
  ): Promise<MaintenancePart | null> {
    const updatedMaintenancePart = await MaintenancePartModel.updateOne(
      { id: maintenancePart.identifier },
      {
        partId: maintenancePart.partId,
        maintenanceId: maintenancePart.maintenanceId,
        quantityUsed: maintenancePart.quantityUsed.value,
        cost: maintenancePart.cost.value,
      }
    );
    return updatedMaintenancePart
      ? MaintenancePart.reconstitute(updatedMaintenancePart)
      : null;
  }
  async delete(identifier: string): Promise<void> {
    await MaintenancePartModel.deleteOne({ id: identifier });
    return Promise.resolve();
  }
  async findByMaintenanceId(maintenanceId: string): Promise<MaintenancePart[]> {
    const foundMaintenanceParts = await MaintenancePartModel.find({
      maintenanceId,
    });
    return foundMaintenanceParts.map((maintenancePart) => {
      MaintenancePart.reconstitute(maintenancePart);
    });
  }
}
