import { SparePart } from "../../../domain/entities/SparePart";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { PositiveNumber } from "../../../domain/types/PositiveNumber";
import { ValidString } from "../../../domain/types/ValidString";
import { SparePartRepository } from "../../repositories/SparePartRepository";

export class SparePartCreateUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(
    userRole: string,
    name: string,
    partNumber: string,
    stockQuantity: number,
    reorderThreshold: number,
    brand?: string
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }

    const nameOrError = ValidString.from(name);
    const partNumberOrError = ValidString.from(partNumber);
    const stockQuantityOrError = PositiveNumber.from(stockQuantity);
    const reorderThresholdOrError = PositiveNumber.from(reorderThreshold);

    if (nameOrError instanceof Error) {
      return nameOrError;
    }

    if (partNumberOrError instanceof Error) {
      return partNumberOrError;
    }

    if (stockQuantityOrError instanceof Error) {
      return stockQuantityOrError;
    }

    if (reorderThresholdOrError instanceof Error) {
      return reorderThresholdOrError;
    }

    const newSparePart = SparePart.create(
      nameOrError,
      partNumberOrError,
      stockQuantityOrError,
      reorderThresholdOrError,
      [],
      [],
      brand
    );

    return await this.sparePartRepository.save(newSparePart);
  }
}
