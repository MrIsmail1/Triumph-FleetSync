import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { InvalidMaintenanceError } from "../../../domain/errors/InvalidMaintenanceError";
import { ValidString } from "../../../domain/types/ValidString";

export class AddMaintenanceUsecase {
  constructor(private maintenanceRepository: MaintenanceRepository) {}

  async execute(data: {
    motorbikeId: string;
    maintenanceDate: Date;
    mileageAtMaintenance: number;
    maintenanceType: string;
    maintenanceCost: number;
    maintenanceDescription: string;
    breakdownId?: string;
    warrantyId?: string;
  }): Promise<void | Error> {
    if (!data.motorbikeId || !data.maintenanceType || !data.maintenanceDate) {
      return new InvalidMaintenanceError();
    }

    const maintenance = MaintenanceEntity.create(
      data.motorbikeId,
      data.maintenanceDate,
      data.mileageAtMaintenance,
      ValidString.reconstitute(data.maintenanceType),
      data.maintenanceCost,
      ValidString.reconstitute(data.maintenanceDescription),
      data.breakdownId || null,
      data.warrantyId || null
    );

    await this.maintenanceRepository.save(maintenance);
  }
}
