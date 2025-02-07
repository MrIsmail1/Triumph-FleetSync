import { PartPurchase } from "../../../domain/entities/PartPurchase.ts";
import { PartPurchaseNotFoundError } from "../../../domain/errors/PartPurchaseNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PartPurchaseStatus } from "../../../domain/types/PartPurchaseStatus.ts";
import { PartPurchaseRepository } from "../../repositories/PartPurchaseRepository.ts";

export class PartPurchaseListUsecase {
  constructor(private partPurchaseRepository: PartPurchaseRepository) {}

  async execute(
    currentUserRole: string,
    filters?: {
      id?: string;
      partId?: string;
      status?: string;
      purchaseDate?: string;
      receivedDate?: string;
    }
  ): Promise<PartPurchase[] | Error> {
    if (currentUserRole !== "admin") {
      return new UnauthorizedActionError();
    }

    if (filters?.status) {
      const partPurchaseStatusOrError = PartPurchaseStatus.from(filters.status);
      if (partPurchaseStatusOrError instanceof Error) {
        return partPurchaseStatusOrError;
      }
    }

    const partPurchase = await this.partPurchaseRepository.find({
      id: filters?.id,
      partId: filters?.partId,
      status: filters?.status,
      purchaseDate: filters?.purchaseDate,
      receivedDate: filters?.receivedDate,
    });

    if (!partPurchase) {
      new PartPurchaseNotFoundError();
    }
    return partPurchase;
  }
}
