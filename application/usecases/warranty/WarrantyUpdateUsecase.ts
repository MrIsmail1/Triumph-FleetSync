import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";
import { WarrantyUpdateError } from "../../../domain/errors/WarrantyUpdateError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { ValidString } from "../../../domain/types/ValidString";

export class WarrantyUpdateUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  public async execute(
    currentUserIdentifier: string,
    currentUserRole: string,
    warrantyId: string,
    dataToUpdate: Partial<{
      validFrom: Date;
      validUntil: Date;
      providerName: string;
      warrantyDetails: string;
    }>
  ) {

    const warranty = await this.warrantyRepository.findById(warrantyId);
    if (!warranty) {
      return new WarrantyNotFoundError();
    }

    if (currentUserRole !== "admin" && currentUserRole !== "company") {
      const userWarranties = await this.warrantyRepository.findByMotorbikeId(warrantyId);

      if (!userWarranties || userWarranties.length === 0) {
        return new AccessDeniedError();
      }
    }

    if (dataToUpdate.validFrom) {
      warranty.validFrom = dataToUpdate.validFrom;
    }

    if (dataToUpdate.validUntil) {
      if (dataToUpdate.validUntil < warranty.validFrom) {
        return new WarrantyUpdateError();
      }
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
