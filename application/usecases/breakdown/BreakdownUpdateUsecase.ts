import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { BreakdownNotFoundError } from "../../../domain/errors/BreakdownNotFoundError";
import { BreakdownUpdateError } from "../../../domain/errors/BreakdownUpdateError";
import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { ValidString } from "../../../domain/types/ValidString";

export class BreakdownUpdateUsecase {
  public constructor(private readonly breakdownRepository: BreakdownRepository) {}

  public async execute(
    userId: string,
    userRole: string,
    breakdownId: string,
    dataToUpdate: Partial<{
      description: string;
    }>
  ) {
    if (userRole === "client") {
      return new UnauthorizedActionError();
    }

    const breakdown = await this.breakdownRepository.findById(breakdownId);
    if (!breakdown) {
      return new BreakdownNotFoundError();
    }

    if (dataToUpdate.description) {
      const descriptionOrError = ValidString.from(dataToUpdate.description);
      if (descriptionOrError instanceof Error) {
        return descriptionOrError;
      }
      breakdown.description = descriptionOrError;
    }

    const updatedBreakdown = await this.breakdownRepository.update(breakdown);

    if (!updatedBreakdown) {
      return new BreakdownUpdateError();
    }

    return updatedBreakdown;
  }
}
