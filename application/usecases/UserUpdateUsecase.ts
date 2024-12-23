import { InvalidCredentialsError } from "../../domain/errors/InvalidCredentialsError";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { Email } from "../../domain/types/Email";
import { ValidString } from "../../domain/types/ValidString";
import { UserRepository } from "../repositories/UserRepository";
import { PasswordHasherService } from "../services/PasswordHasherService";

export class UserUpdateEmailUsecase {
  public constructor(
    private readonly userRepository: UserRepository,
    private hasher: PasswordHasherService
  ) {}

  public async execute(
    userId: string,
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string
  ) {
    const userEmailOrError = email ? Email.from(email) : undefined;
    const firstNameOrError = firstName
      ? ValidString.from(firstName)
      : undefined;
    const lastNameOrError = lastName ? ValidString.from(lastName) : undefined;

    if (userEmailOrError instanceof Error) {
      return userEmailOrError;
    }
    if (firstNameOrError instanceof Error) {
      return firstNameOrError;
    }
    if (lastNameOrError instanceof Error) {
      return lastNameOrError;
    }

    const user = await this.userRepository.findById(userId);

    if (!user) {
      return new UserNotFoundError();
    }

    if (password) {
      const isCorrectPassword = await this.hasher.compare(
        password,
        user.passwordHash
      );

      if (!isCorrectPassword) {
        return new InvalidCredentialsError();
      }
    }

    if (userEmailOrError !== undefined) {
      user.email = userEmailOrError;
    }

    if (firstNameOrError !== undefined) {
      user.firstName = firstNameOrError;
    }

    if (lastNameOrError !== undefined) {
      user.lastName = lastNameOrError;
    }

    user.updatedAt = new Date();

    await this.userRepository.update(user);

    return user;
  }
}
