import { WarrantyRepository } from "../../repositories/WarrantyRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { WarrantyNotFoundError } from "../../../domain/errors/WarrantyNotFoundError";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { AccessDeniedError } from "../../../domain/errors/AccessDeniedError";

export class WarrantiesListUsecase {
  public constructor(
    private readonly warrantyRepository: WarrantyRepository,
    private readonly userRepository: UserRepository
  ) {}

  public async execute(
    currentUserIdentifier: string,
    warrantyId?: string
  ) {
    const currentUser = await this.userRepository.findById(currentUserIdentifier);

    if (!currentUser) {
      return new UserNotFoundError();
    }

    const roleValue = currentUser.role.value;

    if (warrantyId) {
      const warranty = await this.warrantyRepository.findById(warrantyId);

      if (!warranty) {
        return new WarrantyNotFoundError();
      }

      if (roleValue === "admin" || roleValue === "manager" || roleValue === "technician") {
        return warranty;
      }

      return new AccessDeniedError();
    }

    if (roleValue === "admin" || roleValue === "manager" || roleValue === "technician") {
      return await this.warrantyRepository.findAll();
    }

    return new AccessDeniedError();
  }
}
