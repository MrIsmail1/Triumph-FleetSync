import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { Role } from "../../../domain/types/Role";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class MaintenanceDeleteUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(userRole: string, maintenanceId: string) {
    if (userRole === "client") {
      return new UnauthorizedActionError();
    }

    const maintenance = await this.maintenanceRepository.findById(
      maintenanceId
    );
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    await this.maintenanceRepository.delete(maintenanceId);

    return true;
  }
}
