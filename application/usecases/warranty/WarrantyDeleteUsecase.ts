import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class WarrantyDeleteUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  async execute(currentUserIdentifier: string, currentUserRole: string, warrantyId: string) {

    const warranty = await this.warrantyRepository.findById(warrantyId);
    if (!warranty) {
      return new WarrantyNotFoundError();
    }

    if (currentUserRole === "admin" || currentUserRole === "company") {
      await this.warrantyRepository.delete(warrantyId);
      return true;
    }

    if (currentUserRole === "company" || currentUserRole === "dealership") {
      const userWarranties = await this.warrantyRepository.findByMotorbikeId(warrantyId);

      if (!userWarranties || userWarranties.length === 0) {
        return new AccessDeniedError();
      }

      await this.warrantyRepository.delete(warrantyId);
      return true;
    }
;
    return new UnauthorizedActionError();
  }
}
