import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { BreakdownEntity } from "../../../domain/entities/BreakdownEntity";
import { InvalidBreakdownDescriptionError } from "../../../domain/errors/InvalidBreakdownDescriptionError";
import { InvalidBreakdownActionError } from "../../../domain/errors/InvalidBreakdownActionError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { ValidString } from "../../../domain/types/ValidString";
import { resolve } from "node:path";

export class BreakdownCreateUsecase {
  constructor(private readonly breakdownRepository: BreakdownRepository) {}

  public async execute(
    motorbikeId: string, 
    description: string,
    actionTaken: string,
    currentUserIdentifier: string,
    currentUserRole: string,
    resolved: boolean
  ) {

    const allowedRoles = ["admin", "dealership", "company"];
    if (!allowedRoles.includes(currentUserRole)) {
      return new AccessDeniedError();
    }

    const validDescription = ValidString.from(description);
    if (validDescription instanceof Error) {
      return new InvalidBreakdownDescriptionError();
    }

    const validActionTaken = ValidString.from(actionTaken);
    if (validActionTaken instanceof Error) {
      return new InvalidBreakdownActionError();
    }

    const breakdown = BreakdownEntity.create(
      currentUserIdentifier,
      validDescription,
      validActionTaken,
      resolved,
      motorbikeId,
    );

    return await this.breakdownRepository.save(breakdown);
  }
}
