import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { WarrantyEntity } from "../../../domain/entities/WarrantyEntity";
import { InvalidWarrantyDateError } from "../../../domain/errors/InvalidWarrantyDateError";
import { InvalidWarrantyProviderNameError } from "../../../domain/errors/InvalidWarrantyProviderNameError";
import { ValidString } from "../../../domain/types/ValidString";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { WarrantyAlreadyExistsError } from "../../../domain/errors/WarrantyAlreadyExistsError";

export class WarrantyCreateUsecase {
  constructor(private readonly warrantyRepository: WarrantyRepository) {}

  async execute(
    validFrom: Date,
    validUntil: Date,
    providerName: string,
    warrantyDetails: string,
    motorbikeId: string,
    currentUserIdentifier: string,
    currentUserRole: string
  ) {

    if (!["admin", "company", "company", "dealership"].includes(currentUserRole)) {
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

    const existingWarranty = await this.warrantyRepository.findActiveWarrantyByMotorbikeId(motorbikeId);
    if (existingWarranty) {
      return new WarrantyAlreadyExistsError();
    }

    const warranty = WarrantyEntity.create(
      validFrom,
      validUntil,
      validProviderName,
      validWarrantyDetails,
      motorbikeId,
      currentUserIdentifier,
    );

    await this.warrantyRepository.save(warranty);

    return warranty;
  }
}
