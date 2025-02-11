import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { InvalidMaintenanceError } from "../../../domain/errors/InvalidMaintenanceError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { ValidString } from "../../../domain/types/ValidString";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class MaintenanceCreateUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  public async execute(
    motorbikeId: string,
    maintenanceDate: string,
    mileageAtMaintenance: number,
    maintenanceType: string,
    maintenanceCost: number,
    maintenanceDescription: string,
    currentUserIdentifier: string,
    currentUserRole: string,
    companyOrDealerShipId: string,
    breakdownId?: string,
    warrantyId?: string
  ) {
    const allowedRoles = ["admin", "company", "dealership", "technician"];
    if (!allowedRoles.includes(currentUserRole)) {
      return new UnauthorizedActionError();
    }

    if (!motorbikeId || !maintenanceType || !maintenanceDate) {
      return new InvalidMaintenanceError();
    }

    const maintenanceTypeOrError = ValidString.from(maintenanceType);
    if (maintenanceTypeOrError instanceof Error) {
      return maintenanceTypeOrError;
    }

    const maintenanceDescriptionOrError = ValidString.from(maintenanceDescription);
    if (maintenanceDescriptionOrError instanceof Error) {
      return maintenanceDescriptionOrError;
    }

    const maintenance = MaintenanceEntity.create(
      motorbikeId,
      new Date(maintenanceDate),
      mileageAtMaintenance,
      maintenanceTypeOrError,
      maintenanceCost,
      maintenanceDescriptionOrError,
      companyOrDealerShipId,
      breakdownId || null,
      warrantyId || null
    );

    return await this.maintenanceRepository.save(maintenance);
  }
}
