import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";

export class SparePartListUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(
    userRole: string,
    filters?: {
      _id?: string;
      name?: string;
      partNumber?: string;
      brand?: string;
      stockQuantity?: number;
      reorderThreshold?: number;
    }
  ) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }
    return await this.sparePartRepository.find(filters);
  }
}
