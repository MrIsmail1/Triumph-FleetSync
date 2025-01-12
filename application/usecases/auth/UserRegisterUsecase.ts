import { UserEntity } from "../../../domain/entities/UserEntity";
import { UserAlreadyExistsError } from "../../../domain/errors/UserAlreadyExistsError";
import { Email } from "../../../domain/types/Email";
import { Password } from "../../../domain/types/Password";
import { Role } from "../../../domain/types/Role";
import { ValidString } from "../../../domain/types/ValidString";
import { UserRepository } from "../../repositories/UserRepository";
import { PasswordHasherService } from "../../services/PasswordHasherService";

export class UserRegisterUsecase {
  public constructor(
    private readonly userRepository: UserRepository,
    private hasher: PasswordHasherService
  ) {}

  public async execute(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
  ) {
    const firstNameOrError = ValidString.from(firstName);
    if (firstNameOrError instanceof Error) {
      return firstNameOrError;
    }

    const lastNameOrError = ValidString.from(lastName);
    if (lastNameOrError instanceof Error) {
      return lastNameOrError;
    }

    const userEmailOrError = Email.from(email);
    if (userEmailOrError instanceof Error) {
      return userEmailOrError;
    }

    const userPasswordOrError = Password.from(password);
    if (userPasswordOrError instanceof Error) {
      return userPasswordOrError;
    }

    const userRoleOrError = Role.isClient(role);
    if (userRoleOrError instanceof Error) {
      return userRoleOrError;
    }

    const userAlreadyExists = await this.userRepository.findByEmail(
      userEmailOrError
    );
    if (userAlreadyExists) {
      return new UserAlreadyExistsError();
    }

    const passwordHash = await this.hasher.hash(userPasswordOrError);
    const newUser = UserEntity.create(
      firstNameOrError,
      lastNameOrError,
      userEmailOrError,
      passwordHash,
      userRoleOrError
    );

    await this.userRepository.save(newUser);
    const { passwordHash: _, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }
}
