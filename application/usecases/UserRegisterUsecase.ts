import { UserEntity } from "../../domain/entities/UserEntity";
import { UserAlreadyExistsError } from "../../domain/errors/UserAlreadyExistsError";
import { Email } from "../../domain/types/Email";
import { Password } from "../../domain/types/Password";
import { Role } from "../../domain/types/Role";
import { ValidString } from "../../domain/types/String";
import { UserRepository } from "../repositories/UserRepository";
import { PasswordHasherService } from "../services/PasswordHasherService";

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
    const lastNameOrError = ValidString.from(lastName);
    const userEmailOrError = Email.from(email);
    const userPasswordOrError = Password.from(password);
    const userRoleOrError = Role.from(role);

    if (!(firstNameOrError instanceof Error)) {
      if (!(lastNameOrError instanceof Error)) {
        if (!(userEmailOrError instanceof Error)) {
          if (!(userPasswordOrError instanceof Error)) {
            if (
              !(userRoleOrError instanceof Error) &&
              userRoleOrError.isClient()
            ) {
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
            } else {
              return userRoleOrError;
            }
          } else {
            return userPasswordOrError;
          }
        } else {
          return userEmailOrError;
        }
      } else {
        return lastNameOrError;
      }
    } else {
      return firstNameOrError;
    }
  }
}
