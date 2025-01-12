import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { UserRepository } from "../../repositories/UserRepository";

export class UserUpdateProfileUsecase {
  public constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    userId: string,
    userRole: string,
    dataToUpdate: Partial<{
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    }>
  ) {
    if (userRole != "admin" && dataToUpdate.role) {
      return new UnauthorizedActionError();
    }

    const user = await this.userRepository.findById(userId);

    if (!user) {
      return new UserNotFoundError();
    }
  }
}
