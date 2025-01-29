import { MaintenancePart } from "../../../domain/entities/MaintenancePart";
import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError";
import { SparePartNotFoundError } from "../../../domain/errors/SparePartNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { PositiveNumber } from "../../../domain/types/PositiveNumber";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { SparePartRepository } from "../../repositories/SparePartRepository";
import { InsufficientSparePartStockError } from "./../../../domain/errors/InsufficientSparePartStockError";
import { MaintenancePartRepository } from "./../../repositories/MaintenancePartRepository";

export class UsePartInMaintenanceUsecase {
  constructor(
    private readonly sparePartRepository: SparePartRepository,
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly maintenancePartRepository: MaintenancePartRepository
  ) {}

  public async execute(
    userRole: string,
    maintenanceId: string,
    partId: string,
    quantityUsed: number,
    cost: number
  ) {
    if (userRole !== "technician") {
      return new UnauthorizedActionError();
    }

    const maintenance = await this.maintenanceRepository.findById(
      maintenanceId
    );
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    const sparePart = await this.sparePartRepository.findById(partId);
    if (!sparePart) {
      return new SparePartNotFoundError();
    }

    const quantityOrError = PositiveNumber.from(quantityUsed);
    if (quantityOrError instanceof Error) {
      return quantityOrError;
    }
    const costOrError = PositiveNumber.from(cost);
    if (costOrError instanceof Error) {
      return costOrError;
    }

    if (sparePart.stockQuantity.value < quantityUsed) {
      return new InsufficientSparePartStockError();
    }

    const newMaintenancePart = MaintenancePart.create(
      partId,
      maintenanceId,
      quantityOrError,
      costOrError
    );

    const updatedStockOrError = PositiveNumber.from(
      sparePart.stockQuantity.value - quantityUsed
    );
    if (updatedStockOrError instanceof Error) {
      return updatedStockOrError;
    }
    sparePart.stockQuantity = updatedStockOrError;

    await this.sparePartRepository.update(sparePart);
    const maintenancePartRecord = await this.maintenancePartRepository.save(
      newMaintenancePart
    );

    return maintenancePartRecord;
  }
}
