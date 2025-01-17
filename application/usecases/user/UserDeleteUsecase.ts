import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { UserRepository } from "../../repositories/UserRepository";
export class UserDeleteUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(currentUserId: string, userToDeleteId: string) {
    const user = await this.userRepository.findById(currentUserId);

    if (!user) {
      return new UserNotFoundError();
    }

    if (user.role.value !== "admin" && user.identifier !== userToDeleteId) {
      return new UnauthorizedActionError();
    }

    await this.userRepository.delete(userToDeleteId);

    return true;
  }
}
