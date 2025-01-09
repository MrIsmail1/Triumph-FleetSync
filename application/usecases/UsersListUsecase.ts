import { AccessDeniedError } from "../../domain/errors/AccessDeniedError";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { UserRepository } from "../repositories/UserRepository";

export class UsersListUsecase {
  public constructor(private readonly userRepository: UserRepository) {}

  public async execute(currentUserIdentifier: string) {
    const currentUser = await this.userRepository.findById(
      currentUserIdentifier
    );
    if (!currentUser) {
      return new UserNotFoundError();
    }

    if (currentUser.role.value !== "Admin") {
      return new AccessDeniedError();
    }

    const users = await this.userRepository.findAll();

    const usersWithoutPassword = users.map((user) => {
      const { passwordHash, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return usersWithoutPassword;
  }
}
