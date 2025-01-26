import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { InvalidMaintenanceError } from "../../../domain/errors/InvalidMaintenanceError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { Role } from "../../../domain/types/Role";
import { ValidString } from "../../../domain/types/ValidString";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class MaintenanceCreateUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(data: {
    motorbikeId: string;
    maintenanceDate: string;
    mileageAtMaintenance: number;
    maintenanceType: string;
    maintenanceCost: number;
    maintenanceDescription: string;
    clientId: string;
    breakdownId?: string;
    warrantyId?: string;
    userRole: string;
  }): Promise<void | Error> {
    if (data.userRole !== "admin" && data.userRole !== "manager") {
      return new UnauthorizedActionError();
    }

    if (
      !data.motorbikeId ||
      !data.maintenanceType ||
      !data.maintenanceDate ||
      !data.clientId
    ) {
      return new InvalidMaintenanceError();
    }

    const maintenanceTypeOrError = ValidString.from(data.maintenanceType);
    if (maintenanceTypeOrError instanceof Error) {
      return maintenanceTypeOrError;
    }

    const maintenanceDescriptionOrError = ValidString.from(
      data.maintenanceDescription
    );
    if (maintenanceDescriptionOrError instanceof Error) {
      return maintenanceDescriptionOrError;
    }

    const maintenance = MaintenanceEntity.create(
      data.motorbikeId,
      new Date(data.maintenanceDate),
      data.mileageAtMaintenance,
      maintenanceTypeOrError,
      data.maintenanceCost,
      maintenanceDescriptionOrError,
      data.clientId,
      data.breakdownId || null,
      data.warrantyId || null
    );

    await this.maintenanceRepository.save(maintenance);
  }
}
