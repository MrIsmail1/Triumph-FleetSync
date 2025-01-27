import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { SparePartRepository } from "../../repositories/SparePartRepository";

export class SparePartListUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(
    userRole: string,
    filters?: {
      name?: string;
      partNumber?: string;
      brand?: string;
      stockQuantity?: number;
      reorderThreshold?: number;
    }
  ) {
    if (userRole !== "manager" && userRole !== "admin") {
      return new UnauthorizedActionError();
    }

    return await this.sparePartRepository.findAll(filters);
  }
}
