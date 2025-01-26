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
    breakdownId?: string
  ) {
    const currentUser = await this.userRepository.findById(currentUserIdentifier);

    if (!currentUser) {
      return new UserNotFoundError();
    }

    const roleValue = currentUser.role.value.toString();

    if (breakdownId) {
      const breakdown = await this.breakdownRepository.findById(breakdownId);
      if (!breakdown) {
        return new BreakdownNotFoundError();
      }

      if (roleValue === "admin") {
        return breakdown;
      } else if (roleValue === "client") {
        if (breakdown.clientId !== currentUser.identifier) {
          return new AccessDeniedError();
        }
        return breakdown;
      } else {
        return new AccessDeniedError();
      }
    }

    if (roleValue === "admin") {
      return await this.breakdownRepository.findAll();
    } else if (roleValue === "client") {
      return await this.breakdownRepository.findAllByClientId(currentUser.identifier);
    }

    return new AccessDeniedError();
  }
}
