import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PositiveNumber } from "../../../domain/types/PositiveNumber.ts";
import { ValidString } from "../../../domain/types/ValidString.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";
import { SparePartNotFoundError } from "./../../../domain/errors/SparePartNotFoundError.ts";

export class SparePartUpdateUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(
    userRole: string,
    sparePartId: string,
    dataToUpdate: Partial<{
      name?: string;
      partNumber?: string;
      stockQuantity?: number;
      reorderThreshold?: number;
      brand?: string;
    }>
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }

    const sparePart = await this.sparePartRepository.findById(sparePartId);

    if (!sparePart) {
      return new SparePartNotFoundError();
    }

    if (dataToUpdate.name) {
      const nameOrError = ValidString.from(dataToUpdate.name);

      if (nameOrError instanceof Error) {
        return nameOrError;
      }

      sparePart.name = nameOrError;
    }

    if (dataToUpdate.partNumber) {
      const partNumberOrError = ValidString.from(dataToUpdate.partNumber);

      if (partNumberOrError instanceof Error) {
        return partNumberOrError;
      }

      sparePart.partNumber = partNumberOrError;
    }

    if (dataToUpdate.stockQuantity) {
      const stockQuantityOrError = PositiveNumber.from(
        dataToUpdate.stockQuantity
      );

      if (stockQuantityOrError instanceof Error) {
        return stockQuantityOrError;
      }

      sparePart.stockQuantity = stockQuantityOrError;
    }

    if (dataToUpdate.reorderThreshold) {
      const reorderThresholdOrError = PositiveNumber.from(
        dataToUpdate.reorderThreshold
      );

      if (reorderThresholdOrError instanceof Error) {
        return reorderThresholdOrError;
      }

      sparePart.reorderThreshold = reorderThresholdOrError;
    }

    if (dataToUpdate.brand) {
      sparePart.brand = dataToUpdate.brand;
    }

    return await this.sparePartRepository.update(sparePart);
  }
}
