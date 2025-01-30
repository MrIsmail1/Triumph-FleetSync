import { PartPurchase } from "../../../domain/entities/PartPurchase.ts";
import { SparePartNotFoundError } from "../../../domain/errors/SparePartNotFoundError.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PartPurchaseStatus } from "../../../domain/types/PartPurchaseStatus.ts";
import { PositiveNumber } from "../../../domain/types/PositiveNumber.ts";
import { PartPurchaseRepository } from "../../repositories/PartPurchaseRepository.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";

export class PartPurchaseCreateUsecase {
  constructor(
    private readonly partPurchaseRepository: PartPurchaseRepository,
    private readonly sparePartRepository: SparePartRepository
  ) {}

  public async execute(
    userRole: string,
    partPurchaseData: {
      partId: string;
      quantity: number;
      costPerUnit: number;
      status: string;
      orderDate: string;
    }
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }

    const part = await this.sparePartRepository.findById(
      partPurchaseData.partId
    );
    if (!part) {
      return new SparePartNotFoundError();
    }

    const quantityOrError = PositiveNumber.from(partPurchaseData.quantity);
    if (quantityOrError instanceof Error) {
      return quantityOrError;
    }

    const costPerUnitOrError = PositiveNumber.from(
      partPurchaseData.costPerUnit
    );
    if (costPerUnitOrError instanceof Error) {
      return costPerUnitOrError;
    }

    const totalCostOrError = PositiveNumber.from(
      quantityOrError.value * costPerUnitOrError.value
    );

    if (totalCostOrError instanceof Error) {
      return totalCostOrError;
    }

    const statusOrError = PartPurchaseStatus.from(partPurchaseData.status);

    if (statusOrError instanceof Error) {
      return statusOrError;
    }

    const purchase = PartPurchase.create(
      part.identifier,
      quantityOrError,
      costPerUnitOrError,
      totalCostOrError,
      statusOrError,
      new Date(partPurchaseData.orderDate),
      null
    );

    return await this.partPurchaseRepository.save(purchase);
  }
}
