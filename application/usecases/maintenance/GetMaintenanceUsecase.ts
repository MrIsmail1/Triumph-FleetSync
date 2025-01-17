import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { InvalidMaintenanceError } from "../../../domain/errors/InvalidMaintenanceError";

export class GetMaintenanceUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(id: string) {
    if (!id) {
      return new InvalidMaintenanceError();
    }

    const maintenance = await this.maintenanceRepository.findById(id);

    if (!maintenance) {
      return new InvalidMaintenanceError();
    }

    return maintenance;
  }
}
