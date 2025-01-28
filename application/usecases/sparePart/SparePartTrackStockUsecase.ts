import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { SparePartRepository } from "../../repositories/SparePartRepository";
import { NotificationService } from "../../services/NotificationService";

export class TrackStockUsecase {
  constructor(
    private readonly sparePartRepository: SparePartRepository,
    private readonly notificationService: NotificationService
  ) {}

  public async execute(userRole: string) {
    if (userRole !== "admin" && userRole !== "manager") {
      return new UnauthorizedActionError();
    }

    const allParts = await this.sparePartRepository.findAll();

    const belowThresholdParts = allParts.filter(
      (part) => part.stockQuantity.value < part.reorderThreshold.value
    );

    const alerts: string[] = [];
    for (const part of belowThresholdParts) {
      const alertMessage = `Spare part "${part.name.value}" (Part #${part.partNumber.value}) is below threshold. Current Stock: ${part.stockQuantity.value}, Threshold: ${part.reorderThreshold.value}`;

      await this.notificationService.sendAlert(alertMessage);
      alerts.push(alertMessage);
    }
    return alerts;
  }
}
