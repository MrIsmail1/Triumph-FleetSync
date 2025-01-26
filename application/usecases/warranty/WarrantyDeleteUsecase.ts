import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";

export class WarrantyDeleteUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  async execute(userRole: string, warrantyId: string) {
    if (userRole !== "admin" && userRole !== "manager") {
      return new UnauthorizedActionError();
    }

    const warranty = await this.warrantyRepository.findById(warrantyId);

    if (!warranty) {
      return new WarrantyNotFoundError();
    }

    await this.warrantyRepository.delete(warrantyId);

    return true;
  }
}
