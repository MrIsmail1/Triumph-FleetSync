import { MaintenancePart } from "../../../domain/entities/MaintenancePart.ts";
import { MaintenanceNotFoundError } from "../../../domain/errors/MaintenanceNotFoundError.ts";
import { SparePartNotFoundError } from "../../../domain/errors/SparePartNotFoundError.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PositiveNumber } from "../../../domain/types/PositiveNumber.ts";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";
import { InsufficientSparePartStockError } from "./../../../domain/errors/InsufficientSparePartStockError.ts";
import { MaintenancePartRepository } from "./../../repositories/MaintenancePartRepository.ts";

export class UsePartInMaintenanceUsecase {
  constructor(
    private readonly sparePartRepository: SparePartRepository,
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly maintenancePartRepository: MaintenancePartRepository
  ) {}

  public async execute(
    userRole: string,
    maintenancePartData: {
      maintenanceId: string;
      partId: string;
      quantityUsed: number;
      cost: number;
    }
  ) {
    if (userRole !== "technician") {
      return new UnauthorizedActionError();
    }

    const maintenance = await this.maintenanceRepository.findById(
      maintenancePartData.maintenanceId
    );
    if (!maintenance) {
      return new MaintenanceNotFoundError();
    }

    const sparePart = await this.sparePartRepository.findById(
      maintenancePartData.partId
    );
    if (!sparePart) {
      return new SparePartNotFoundError();
    }

    const quantityOrError = PositiveNumber.from(
      maintenancePartData.quantityUsed
    );
    if (quantityOrError instanceof Error) {
      return quantityOrError;
    }
    const costOrError = PositiveNumber.from(maintenancePartData.cost);
    if (costOrError instanceof Error) {
      return costOrError;
    }

    if (sparePart.stockQuantity.value < maintenancePartData.quantityUsed) {
      return new InsufficientSparePartStockError();
    }

    const newMaintenancePart = MaintenancePart.create(
      maintenancePartData.partId,
      maintenancePartData.maintenanceId,
      quantityOrError,
      costOrError
    );

    const updatedStockOrError = PositiveNumber.from(
      sparePart.stockQuantity.value - maintenancePartData.quantityUsed
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
