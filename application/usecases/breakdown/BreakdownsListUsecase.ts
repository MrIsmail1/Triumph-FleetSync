import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";
import { BreakdownNotFoundError } from "../../../domain/errors/BreakdownNotFoundError";

export class BreakdownsListUsecase {
  public constructor(
    private readonly breakdownRepository: BreakdownRepository,
    private readonly userRepository: UserRepository
  ) {}

  public async execute(
    currentUserIdentifier: string,
    currentUserRole: string,
    breakdownId?: string,
    motorbikeId?: string
  ) {

    const currentUser = await this.userRepository.findById(currentUserIdentifier);
    if (!currentUser) {
      return new UserNotFoundError();
    }

    if (breakdownId) {
      const breakdown = await this.breakdownRepository.findById(breakdownId);
      if (!breakdown) {
        return new BreakdownNotFoundError();
      }

      if (currentUserRole === "admin") {
        return breakdown;
      }

      if (currentUserRole === "dealership" || currentUserRole === "company") {
        if (breakdown.companyOrDealerShipId !== currentUserIdentifier) {
          return new AccessDeniedError();
        }
        return breakdown;
      }

      return new AccessDeniedError();
    }

    if (motorbikeId) {
      return await this.breakdownRepository.findAllByMotorbikeId(motorbikeId);
    }

    if (currentUserRole === "admin") {
      return await this.breakdownRepository.findAll();
    }

    if (currentUserRole === "dealership" || currentUserRole === "company") {
      return await this.breakdownRepository.findAllByCompanyOrDealershipId(currentUserIdentifier);
    }

    return new AccessDeniedError();
  }
}
