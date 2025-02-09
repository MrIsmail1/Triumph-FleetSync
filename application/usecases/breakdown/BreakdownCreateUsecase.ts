import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { BreakdownEntity } from "../../../domain/entities/BreakdownEntity";
import { InvalidBreakdownDescriptionError } from "../../../domain/errors/InvalidBreakdownDescriptionError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { ValidString } from "../../../domain/types/ValidString";

export class BreakdownCreateUsecase {
  constructor(private readonly breakdownRepository: BreakdownRepository) {}

  async execute(description: string, clientId: string, userRole: string) {
    if (userRole !== "client") {
      return new AccessDeniedError();
    }

    const validDescription = ValidString.from(description);
    if (validDescription instanceof Error) {
      return new InvalidBreakdownDescriptionError();
    }

    const breakdown = BreakdownEntity.create(validDescription, clientId);
    await this.breakdownRepository.save(breakdown);

    return breakdown;
  }
}
