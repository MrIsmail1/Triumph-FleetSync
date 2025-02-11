import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { MaintenanceUpdateError } from "../../../domain/errors/MaintenanceUpdateError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { ValidString } from "../../../domain/types/ValidString";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class MaintenanceUpdateUsecase {
  public constructor(
    private readonly maintenanceRepository: MaintenanceRepository
  ) {}

  public async execute(
    currentUserIdentifier: string,
    currentUserRole: string,
    maintenanceId: string,
    dataToUpdate: Partial<{
      maintenanceDate: string;
      mileageAtMaintenance: number;
      maintenanceType: string;
      maintenanceCost: number;
      maintenanceDescription: string;
      breakdownId: string | null;
      warrantyId: string | null;
    }>
  ) {

    if (currentUserRole === "technician") {
      return new AccessDeniedError();
    }

    const maintenance = await this.maintenanceRepository.findById(maintenanceId);
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    if (
      (currentUserRole === "company" || currentUserRole === "dealership") &&
      maintenance.companyOrDealerShipId !== currentUserIdentifier
    ) {
      return new UnauthorizedActionError();
    }

    if (dataToUpdate.maintenanceDate) {
      maintenance.maintenanceDate = new Date(dataToUpdate.maintenanceDate);
    }

    if (dataToUpdate.mileageAtMaintenance !== undefined) {
      maintenance.mileageAtMaintenance = dataToUpdate.mileageAtMaintenance;
    }

    if (dataToUpdate.maintenanceType) {
      const maintenanceTypeOrError = ValidString.from(dataToUpdate.maintenanceType);
      if (maintenanceTypeOrError instanceof Error) {
        return maintenanceTypeOrError;
      }
      maintenance.maintenanceType = maintenanceTypeOrError;
    }

    if (dataToUpdate.maintenanceCost !== undefined) {
      maintenance.maintenanceCost = dataToUpdate.maintenanceCost;
    }

    if (dataToUpdate.maintenanceDescription) {
      const maintenanceDescriptionOrError = ValidString.from(dataToUpdate.maintenanceDescription);
      if (maintenanceDescriptionOrError instanceof Error) {
        return maintenanceDescriptionOrError;
      }
      maintenance.maintenanceDescription = maintenanceDescriptionOrError;
    }

    if (dataToUpdate.breakdownId !== undefined) {
      maintenance.breakdownId = dataToUpdate.breakdownId;
    }

    if (dataToUpdate.warrantyId !== undefined) {
      maintenance.warrantyId = dataToUpdate.warrantyId;
    }

    const updatedMaintenance = await this.maintenanceRepository.update(maintenance);

    if (!updatedMaintenance) {
      return new MaintenanceUpdateError();
    }

    return updatedMaintenance;
  }
}
