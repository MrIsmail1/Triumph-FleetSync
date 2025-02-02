import { MaintenancePart } from "../../../domain/entities/MaintenancePart.ts";
import { MaintenancePartRepository } from "./../../../application/repositories/MaintenancePartRepository.ts";
import { MaintenancePartModel } from "./../../database/mongo/maintenancePart.model.ts";

export class MongoMaintenancePartRepository
  implements MaintenancePartRepository
{
  async findById(identifier: string): Promise<MaintenancePart | null> {
    const foundMaintenancePart = await MaintenancePartModel.findOne(identifier);
    return foundMaintenancePart
      ? MaintenancePart.reconstitute(foundMaintenancePart)
      : null;
  }
  async save(
    maintenancePart: MaintenancePart
  ): Promise<MaintenancePart | null> {
    const createdMaintenancePart = await MaintenancePartModel.create({
      id: maintenancePart.identifier,
      partId: maintenancePart.partId,
      maintenanceId: maintenancePart.maintenanceId,
      quantityUsed: maintenancePart.quantityUsed.value,
      cost: maintenancePart.cost.value,
    });
    return MaintenancePart.reconstitute(createdMaintenancePart);
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
