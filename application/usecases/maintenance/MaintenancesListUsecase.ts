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
    maintenanceId?: string
  ): Promise<any> {
    const currentUser = await this.userRepository.findById(currentUserIdentifier);
    if (!currentUser) {
      return new UserNotFoundError();
    }

    const roleValue = currentUser.role.value;

    if (maintenanceId) {
      const maintenance = await this.maintenanceRepository.findById(maintenanceId);
      if (!maintenance) {
        return new MaintenanceNotFoundError();
      }

      if (roleValue === "client" && maintenance.companyOrDealerShipId !== currentUser.identifier) {
        return new AccessDeniedError();
      }

      return maintenance;
    }

    if (roleValue === "admin" || roleValue === "technician") {
      return await this.maintenanceRepository.findAll();
    } else if (roleValue === "client") {
      return await this.maintenanceRepository.findAllByClientId(currentUser.identifier);
    }

    return new AccessDeniedError();
  }
}
