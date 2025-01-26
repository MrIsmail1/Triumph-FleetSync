import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { BreakdownNotFoundError } from "../../../domain/errors/BreakdownNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class BreakdownDeleteUsecase {
  constructor(private readonly breakdownRepository: BreakdownRepository) {}

  async execute(userId: string, userRole: string, breakdownId: string) {
    const breakdown = await this.breakdownRepository.findById(breakdownId);

    if (!breakdown) {
      return new BreakdownNotFoundError();
    }

    if (userRole === "admin") {
      await this.breakdownRepository.delete(breakdownId);
      return true;
    }

    if (userRole === "client" && breakdown.clientId === userId) {
      await this.breakdownRepository.delete(breakdownId);
      return true;
    }

    return new AccessDeniedError();
  }
}
