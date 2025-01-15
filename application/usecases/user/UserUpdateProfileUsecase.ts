import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError";
import { UserNotFoundError } from "../../../domain/errors/UserNotFoundError";
import { UserUpdateProfileError } from "../../../domain/errors/UserUpdateProfileError";
import { Email } from "../../../domain/types/Email";
import { Role } from "../../../domain/types/Role";
import { ValidString } from "../../../domain/types/ValidString";
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
    if (userRole !== "admin" && dataToUpdate.role) {
      return new UnauthorizedActionError();
    }

    const user = await this.userRepository.findById(userId);
    if (!user) {
      return new UserNotFoundError();
    }

    if (dataToUpdate.email) {
      const userEmailOrError = Email.from(dataToUpdate.email);
      if (userEmailOrError instanceof Error) {
        return userEmailOrError;
      }
      user.email = userEmailOrError;
      user.isVerified = false;
    }

    if (dataToUpdate.firstName) {
      const firstNameOrError = ValidString.from(dataToUpdate.firstName);
      if (firstNameOrError instanceof Error) {
        return firstNameOrError;
      }
      user.firstName = firstNameOrError;
    }

    if (dataToUpdate.lastName) {
      const lastNameOrError = ValidString.from(dataToUpdate.lastName);
      if (lastNameOrError instanceof Error) {
        return lastNameOrError;
      }
      user.lastName = lastNameOrError;
    }

    if (dataToUpdate.role) {
      const userRoleOrError = Role.isClient(dataToUpdate.role);
      if (userRoleOrError instanceof Error) {
        return userRoleOrError;
      }
      user.role = userRoleOrError;
    }

    const updatedUser = await this.userRepository.update(user);

    if (!updatedUser) {
      return new UserUpdateProfileError();
    }

    const { passwordHash: _, ...userWithoutPassword } = updatedUser;

    return userWithoutPassword;
  }
}
