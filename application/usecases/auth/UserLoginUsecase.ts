import { InvalidCredentialsError } from "../../../domain/errors/InvalidCredentialsError";
import { Email } from "../../../domain/types/Email";
import { UserRepository } from "../../repositories/UserRepository";
import { PasswordHasherService } from "../../services/PasswordHasherService";

export class UserLoginUsecase {
  public constructor(
    private readonly userRepository: UserRepository,
    private hasher: PasswordHasherService
  ) {}

  public async execute(email: string, password: string) {
    const userEmailOrError = Email.from(email);

    if (!(userEmailOrError instanceof Error)) {
      const user = await this.userRepository.findByEmail(userEmailOrError);
      if (!user) {
        return new InvalidCredentialsError();
      }
      const isCorrectPassword = await this.hasher.compare(
        password,
        user.passwordHash
      );
      if (!isCorrectPassword) {
        return new InvalidCredentialsError();
      }
      return user;
    } else {
      return userEmailOrError;
    }
  }
}
