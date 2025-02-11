import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { BreakdownNotFoundError } from "../../../domain/errors/BreakdownNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class BreakdownDeleteUsecase {
  constructor(private readonly breakdownRepository: BreakdownRepository) {}

  async execute(
    breakdownId: string,
    currentUserIdentifier: string,
    currentUserRole: string
  ) {

    const breakdown = await this.breakdownRepository.findById(breakdownId);
    if (!breakdown) {
      return new BreakdownNotFoundError();
    }

    if (currentUserRole === "admin") {
      await this.breakdownRepository.delete(breakdownId);
      return true;
    }

    if (currentUserRole === "dealership" || currentUserRole === "company") {
      if (breakdown.companyOrDealerShipId === currentUserIdentifier) {
        await this.breakdownRepository.deleteByIdAndCompanyOrDealershipId(breakdownId, currentUserIdentifier);
        return true;
      }
    }

    return new AccessDeniedError();
  }
}
