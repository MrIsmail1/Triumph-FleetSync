import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class MaintenanceDeleteUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(maintenanceId: string, currentUserIdentifier: string, currentUserRole: string) {
    const maintenance = await this.maintenanceRepository.findById(maintenanceId);
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    if (currentUserRole === "technician") {
      return new UnauthorizedActionError();
    }

    if (currentUserRole === "company" || currentUserRole === "dealership") {
      if (maintenance.companyOrDealerShipId !== currentUserIdentifier) {
        return new UnauthorizedActionError();
      }

      return await this.maintenanceRepository.deleteByIdAndCompanyOrDealershipId(maintenanceId, currentUserIdentifier);
    }

    if (currentUserRole === "admin") {
      return await this.maintenanceRepository.delete(maintenanceId);
    }

    return new UnauthorizedActionError();
  }
}
