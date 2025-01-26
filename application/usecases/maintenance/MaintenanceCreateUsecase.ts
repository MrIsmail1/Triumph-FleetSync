import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { InvalidMaintenanceError } from "../../../domain/errors/InvalidMaintenanceError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { ValidString } from "../../../domain/types/ValidString";
import { Role } from "../../../domain/types/Role";

export class MaintenanceCreateUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(data: {
    motorbikeId: string;
    maintenanceDate: Date;
    mileageAtMaintenance: number;
    maintenanceType: string;
    maintenanceCost: number;
    maintenanceDescription: string;
    clientId: string;
    breakdownId?: string;
    warrantyId?: string;
    userRole: Role;
  }): Promise<void | Error> {
    if (data.userRole.value !== "admin" && data.userRole.value !== "manager") {
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
      data.maintenanceDate,
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
