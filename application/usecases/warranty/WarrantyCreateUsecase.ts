import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { WarrantyEntity } from "../../../domain/entities/WarrantyEntity";
import { InvalidWarrantyDateError } from "../../../domain/errors/InvalidWarrantyDateError";
import { InvalidWarrantyProviderNameError } from "../../../domain/errors/InvalidWarrantyProviderNameError";
import { ValidString } from "../../../domain/types/ValidString";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";

export class WarrantyCreateUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  async execute(
    validFrom: Date,
    validUntil: Date,
    providerName: string,
    warrantyDetails: string,
    userRole: string
  ) {
    if (userRole !== "admin" && userRole !== "manager") {
      return new UnauthorizedActionError();
    }

    if (validUntil < validFrom) {
      return new InvalidWarrantyDateError();
    }

    const validProviderName = ValidString.from(providerName);
    if (validProviderName instanceof Error) {
      return new InvalidWarrantyProviderNameError();
    }

    const validWarrantyDetails = ValidString.from(warrantyDetails);
    if (validWarrantyDetails instanceof Error) {
      return new InvalidWarrantyProviderNameError();
    }

    const warranty = WarrantyEntity.create(
      validFrom,
      validUntil,
      validProviderName,
      validWarrantyDetails
    );
    await this.warrantyRepository.save(warranty);

    return warranty;
  }
}
