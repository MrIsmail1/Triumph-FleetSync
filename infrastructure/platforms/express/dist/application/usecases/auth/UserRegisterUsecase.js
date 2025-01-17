"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterUsecase = void 0;
const UserEntity_1 = require("../../../domain/entities/UserEntity");
const UserAlreadyExistsError_1 = require("../../../domain/errors/UserAlreadyExistsError");
const Email_1 = require("../../../domain/types/Email");
const Password_1 = require("../../../domain/types/Password");
const Role_1 = require("../../../domain/types/Role");
const ValidString_1 = require("../../../domain/types/ValidString");
class UserRegisterUsecase {
    constructor(userRepository, hasher) {
        this.userRepository = userRepository;
        this.hasher = hasher;
    }
    async execute(firstName, lastName, email, password, role) {
        const firstNameOrError = ValidString_1.ValidString.from(firstName);
        if (firstNameOrError instanceof Error) {
            return firstNameOrError;
        }
        const lastNameOrError = ValidString_1.ValidString.from(lastName);
        if (lastNameOrError instanceof Error) {
            return lastNameOrError;
        }
        const userEmailOrError = Email_1.Email.from(email);
        if (userEmailOrError instanceof Error) {
            return userEmailOrError;
        }
        const userPasswordOrError = Password_1.Password.from(password);
        if (userPasswordOrError instanceof Error) {
            return userPasswordOrError;
        }
        const userRoleOrError = Role_1.Role.isClient(role);
        if (userRoleOrError instanceof Error) {
            return userRoleOrError;
        }
        const userAlreadyExists = await this.userRepository.findByEmail(userEmailOrError);
        if (userAlreadyExists) {
            return new UserAlreadyExistsError_1.UserAlreadyExistsError();
        }
        const passwordHash = await this.hasher.hash(userPasswordOrError);
        const newUser = UserEntity_1.UserEntity.create(firstNameOrError, lastNameOrError, userEmailOrError, passwordHash, userRoleOrError);
        await this.userRepository.save(newUser);
        const { passwordHash: _, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    }
}
exports.UserRegisterUsecase = UserRegisterUsecase;
