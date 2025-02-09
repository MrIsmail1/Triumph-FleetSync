import { SparePart } from "../../../domain/entities/SparePart.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { PositiveNumber } from "../../../domain/types/PositiveNumber.ts";
import { ValidString } from "../../../domain/types/ValidString.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";

export class SparePartCreateUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(
    userRole: string,
    sparePartData: {
      name: string;
      partNumber: string;
      stockQuantity: number;
      reorderThreshold: number;
      brand?: string;
    }
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }

    const nameOrError = ValidString.from(sparePartData.name);
    const partNumberOrError = ValidString.from(sparePartData.partNumber);
    const stockQuantityOrError = PositiveNumber.from(
      sparePartData.stockQuantity
    );
    const reorderThresholdOrError = PositiveNumber.from(
      sparePartData.reorderThreshold
    );

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
      sparePartData.brand
    );

    return await this.sparePartRepository.save(newSparePart);
  }
}
