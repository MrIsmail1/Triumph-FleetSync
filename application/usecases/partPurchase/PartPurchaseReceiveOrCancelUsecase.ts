import { PartPurchaseNotFoundError } from "../../../domain/errors/PartPurchaseNotFoundError.ts";
import { SparePartNotFoundError } from "../../../domain/errors/SparePartNotFoundError.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PartPurchaseStatus } from "../../../domain/types/PartPurchaseStatus.ts";
import { PositiveNumber } from "../../../domain/types/PositiveNumber.ts";
import { PartPurchaseRepository } from "../../repositories/PartPurchaseRepository.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";

export class PartPurchaseReceiveOrCancelUsecase {
  constructor(
    private readonly partPurchaseRepository: PartPurchaseRepository,
    private readonly sparePartRepository: SparePartRepository
  ) {}

  public async execute(
    userRole: string,
    purchaseId: string,
    status: string,
    receivedDate?: string
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }
    const purchase = await this.partPurchaseRepository.findById(purchaseId);
    if (!purchase) {
      return new PartPurchaseNotFoundError();
    }

    const part = await this.sparePartRepository.findById(purchase.partId);
    if (!part) {
      return new SparePartNotFoundError();
    }

    if (purchase.status.value !== "RECEIVED") {
      const statusOrError = PartPurchaseStatus.from(status);
      if (statusOrError instanceof Error) {
        return statusOrError;
      }
      purchase.status = statusOrError;

      if (receivedDate) {
        purchase.receivedDate = new Date(receivedDate);
      }

      const newStockQuantityOrError = PositiveNumber.from(
        part.stockQuantity.value + purchase.quantity.value
      );
      if (newStockQuantityOrError instanceof Error) {
        return newStockQuantityOrError;
      }
      part.stockQuantity = newStockQuantityOrError;

      await this.sparePartRepository.update(part);
      await this.partPurchaseRepository.update(purchase);
    }

    return purchase;
  }
}
