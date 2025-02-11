import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";

export class WarrantiesListUsecase {
  public constructor(
    private readonly warrantyRepository: WarrantyRepository
  ) {}

  public async execute(
    currentUserIdentifier: string,
    currentUserRole: string,
    warrantyId?: string
  ) {
    if (warrantyId) {
      const warranty = await this.warrantyRepository.findById(warrantyId);
      if (!warranty) {
        return new WarrantyNotFoundError();
      }

      if (["admin", "company", "technician"].includes(currentUserRole)) {
        return warranty;
      }

      return new AccessDeniedError();
    }

    if (currentUserRole === "admin") {
      return await this.warrantyRepository.findAll();
    }

    if (["company", "dealership"].includes(currentUserRole)) {
      return await this.warrantyRepository.findAllByCompanyOrDealershipId(currentUserIdentifier);
    }

    return new AccessDeniedError();
  }
}
