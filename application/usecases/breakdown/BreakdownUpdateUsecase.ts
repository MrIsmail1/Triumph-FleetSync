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
      motorbikeId: string;
      description: string;
      actionTaken: string;
      resolved: boolean;
      resolutionDate: string | null;
    }>
  ) {
    if (!["admin", "company", "dealership"].includes(userRole)) {
      return new UnauthorizedActionError();
    }

    const breakdown = await this.breakdownRepository.findById(breakdownId);
    if (!breakdown) {
      return new BreakdownNotFoundError();
    }

    if ((userRole === "company" || userRole === "dealership") && breakdown.companyOrDealerShipId !== userId) {
      return new UnauthorizedActionError();
    }

    if (dataToUpdate.motorbikeId) {
      breakdown.motorbikeId = dataToUpdate.motorbikeId;
    }

    if (dataToUpdate.description) {
      const descriptionOrError = ValidString.from(dataToUpdate.description);
      if (descriptionOrError instanceof Error) {
        return descriptionOrError;
      }
      breakdown.description = descriptionOrError;
    }

    if (dataToUpdate.actionTaken) {
      const actionTakenOrError = ValidString.from(dataToUpdate.actionTaken);
      if (actionTakenOrError instanceof Error) {
        return actionTakenOrError;
      }
      breakdown.actionTaken = actionTakenOrError;
    }

    if (dataToUpdate.resolved !== undefined) {
      breakdown.resolved = dataToUpdate.resolved;
    }

    if (dataToUpdate.resolutionDate !== undefined) {
      breakdown.resolutionDate = dataToUpdate.resolutionDate ? new Date(dataToUpdate.resolutionDate) : undefined;
    }

    const updatedBreakdown = await this.breakdownRepository.update(breakdown);
    if (!updatedBreakdown) {
      return new BreakdownUpdateError();
    }

    return updatedBreakdown;
  }
}
