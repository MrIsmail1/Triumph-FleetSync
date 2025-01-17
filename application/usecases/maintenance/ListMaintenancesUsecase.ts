import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class ListMaintenancesUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute() {
    return await this.maintenanceRepository.findAll();
  }
}
