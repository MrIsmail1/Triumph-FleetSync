import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { MaintenanceHistoryItem } from "../../../domain/types/MaintenanceHistoryItem";
import { MaintenancePartRepository } from "../../repositories/MaintenancePartRepository";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class ReviewMaintenanceHistoryUsecase {
  constructor(
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly maintenancePartRepository: MaintenancePartRepository
  ) {}

  public async execute(
    currentUserId: string,
    userRole: string,
    clientId: string,
    filters?: {
      motorbikeId?: string;
      fromDate?: Date;
      toDate?: Date;
    }
  ) {
    const allowedRoles = ["admin", "client", "technician", "manager"];
    if (!allowedRoles.includes(userRole)) {
      return new UnauthorizedActionError();
    }

    if (userRole == "client" && currentUserId !== clientId) {
      return new UnauthorizedActionError();
    }

    let maintenances;
    if (userRole === "client") {
      maintenances = await this.maintenanceRepository.findAllByClientId(
        clientId,
        filters
      );
    } else {
      maintenances = await this.maintenanceRepository.findAll(filters);
    }

    const maintenanceHistory: MaintenanceHistoryItem[] = [];
    for (const maintenance of maintenances) {
      const partsUsed =
        await this.maintenancePartRepository.findByMaintenanceId(
          maintenance.id
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
        description: maintenance.maintenanceDescription,
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
