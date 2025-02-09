import { MaintenanceEntity } from "../../../domain/entities/MaintenanceEntity.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { MaintenanceHistoryItem } from "../../../domain/types/MaintenanceHistoryItem.ts";
import { MaintenancePartRepository } from "../../repositories/MaintenancePartRepository.ts";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository.ts";

export class ReviewMaintenanceHistoryUsecase {
  constructor(
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly maintenancePartRepository: MaintenancePartRepository
  ) {}

  public async execute(
    currentUserId: string,
    userRole: string,
    filters: {
      companyOrDealershipId?: string;
      motorbikeId?: string;
      fromDate?: Date;
      toDate?: Date;
    }
  ) {
    if (
      userRole == "dealership" &&
      currentUserId !== filters.companyOrDealershipId
    ) {
      return new UnauthorizedActionError();
    }

    if (
      userRole == "company" &&
      currentUserId !== filters.companyOrDealershipId
    ) {
      return new UnauthorizedActionError();
    }

    let maintenances: MaintenanceEntity[];
    if (userRole === "dealership" || userRole === "company") {
      maintenances =
        await this.maintenanceRepository.findByCompanyOrDealershipId(
          currentUserId,
          filters
        );
    } else {
      maintenances = await this.maintenanceRepository.findAll(filters);
    }

    const maintenanceHistory: MaintenanceHistoryItem[] = [];
    for (const maintenance of maintenances) {
      const partsUsed =
        await this.maintenancePartRepository.findByMaintenanceId(
          maintenance.identifier
        );

      const partsCost = partsUsed.reduce(
        (acc, part) => acc + part.cost.value,
        0
      );

      const totalMaintenanceCost = maintenance.maintenanceCost + partsCost;

      const maintenanceItem = MaintenanceHistoryItem.from({
        maintenanceId: maintenance.identifier,
        motorbikeId: maintenance.motorbikeId,
        date: maintenance.maintenanceDate,
        description: maintenance.maintenanceDescription.value,
        laborCost: maintenance.maintenanceCost,
        partsUsed: partsUsed.map((p) => ({
          partId: p.partId,
          quantityUsed: p.quantityUsed.value,
          cost: p.cost.value,
        })),
        totalMaintenanceCost,
      });

      maintenanceHistory.push(maintenanceItem);
    }
    return maintenanceHistory;
  }
}
