import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";
import { WarrantyUpdateError } from "../../../domain/errors/WarrantyUpdateError";
import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { ValidString } from "../../../domain/types/ValidString";

export class WarrantyUpdateUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  public async execute(
    userRole: string,
    warrantyId: string,
    dataToUpdate: Partial<{
      validFrom: Date;
      validUntil: Date;
      providerName: string;
      warrantyDetails: string;
    }>
  ) {
    if (userRole !== "admin" && userRole !== "manager") {
      return new UnauthorizedActionError();
    }

    const warranty = await this.warrantyRepository.findById(warrantyId);
    if (!warranty) {
      return new WarrantyNotFoundError();
    }

    if (dataToUpdate.validFrom && dataToUpdate.validUntil) {
      if (dataToUpdate.validUntil < dataToUpdate.validFrom) {
        return new WarrantyUpdateError();
      }
      warranty.validFrom = dataToUpdate.validFrom;
      warranty.validUntil = dataToUpdate.validUntil;
    }

    if (dataToUpdate.providerName) {
      const providerNameOrError = ValidString.from(dataToUpdate.providerName);
      if (providerNameOrError instanceof Error) {
        return providerNameOrError;
      }
      warranty.providerName = providerNameOrError;
    }

    if (dataToUpdate.warrantyDetails) {
      const warrantyDetailsOrError = ValidString.from(dataToUpdate.warrantyDetails);
      if (warrantyDetailsOrError instanceof Error) {
        return warrantyDetailsOrError;
      }
      warranty.warrantyDetails = warrantyDetailsOrError;
    }

    const updatedWarranty = await this.warrantyRepository.update(warranty);
    if (!updatedWarranty) {
      return new WarrantyUpdateError();
    }

    return updatedWarranty;
  }
}
