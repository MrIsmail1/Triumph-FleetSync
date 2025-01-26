import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { Role } from "../../../domain/types/Role";

export class MaintenanceDeleteUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(userRole: Role, maintenanceId: string) {
    if (userRole.value === "client") {
      return new UnauthorizedActionError();
    }

    const maintenance = await this.maintenanceRepository.findById(maintenanceId);
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    await this.maintenanceRepository.delete(maintenanceId);

    return true;
  }
}
