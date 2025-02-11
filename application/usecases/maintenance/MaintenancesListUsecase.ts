import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";

export class MaintenancesListUsecase {
  constructor(
    private maintenanceRepository: MaintenanceRepository,
    private userRepository: UserRepository
  ) {}

  async execute(
    currentUserIdentifier: string,
    currentUserRole: string,
    maintenanceId?: string
  ): Promise<any> {

    if (currentUserRole === "admin" || currentUserRole === "technician") {
      return await this.maintenanceRepository.findAll();
    }

    const currentUser = await this.userRepository.findById(currentUserIdentifier);
    if (!currentUser) {
      return new UserNotFoundError();
    }

    if (maintenanceId) {
      const maintenance = await this.maintenanceRepository.findById(maintenanceId);
      if (!maintenance) {
        return new MaintenanceNotFoundError();
      }

      if (
        (currentUserRole === "company" || currentUserRole === "dealership") &&
        maintenance.companyOrDealerShipId !== currentUserIdentifier
      ) {
        return new AccessDeniedError();
      }

      return maintenance;
    }

    if (currentUserRole === "company" || currentUserRole === "dealership") {
      return await this.maintenanceRepository.findByCompanyOrDealershipId(currentUserIdentifier);
    }

    return new AccessDeniedError();
  }
}
