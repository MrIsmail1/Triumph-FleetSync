import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { MaintenanceUpdateError } from "../../../domain/errors/MaintenanceUpdateError";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { ValidString } from "../../../domain/types/ValidString";

export class MaintenanceUpdateUsecase {
  public constructor(private readonly maintenanceRepository: MaintenanceRepository) {}

  public async execute(
    userId: string,
    userRole: string,
    maintenanceId: string,
    dataToUpdate: Partial<{
      maintenanceDate: Date;
      mileageAtMaintenance: number;
      maintenanceType: string;
      maintenanceCost: number;
      maintenanceDescription: string;
      breakdownId: string | null;
      warrantyId: string | null;
    }>
  ) {
    if (userRole === "client") {
      return new UnauthorizedActionError();
    }

    const maintenance = await this.maintenanceRepository.findById(maintenanceId);
    if (!maintenance) {
      return new MaintenanceNotFoundError();
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
