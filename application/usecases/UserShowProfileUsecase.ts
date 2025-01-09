import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { UserRepository } from "../repositories/UserRepository";

export class UserShowProfileUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      return new UserNotFoundError();
    }

    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
