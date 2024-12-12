import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { UserRepository } from "../repositories/UserRepository";

export class UserDeleteUsecase {
  public constructor(private readonly userRepository: UserRepository) {}

  public async execute(userId: string) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      return new UserNotFoundError();
    }

    await this.userRepository.delete(user);
  }
}
