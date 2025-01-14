"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateProfileUsecase = void 0;
const UnauthorizedActionError_1 = require("../../../domain/errors/UnauthorizedActionError");
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
const UserUpdateProfileError_1 = require("../../../domain/errors/UserUpdateProfileError");
const Email_1 = require("../../../domain/types/Email");
const Role_1 = require("../../../domain/types/Role");
const ValidString_1 = require("../../../domain/types/ValidString");
class UserUpdateProfileUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId, userRole, dataToUpdate) {
        if (userRole !== "admin" && dataToUpdate.role) {
            return new UnauthorizedActionError_1.UnauthorizedActionError();
        }
        const user = await this.userRepository.findById(userId);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        if (dataToUpdate.email) {
            const userEmailOrError = Email_1.Email.from(dataToUpdate.email);
            if (userEmailOrError instanceof Error) {
                return userEmailOrError;
            }
            user.email = userEmailOrError;
            user.isVerified = false;
        }
        if (dataToUpdate.firstName) {
            const firstNameOrError = ValidString_1.ValidString.from(dataToUpdate.firstName);
            if (firstNameOrError instanceof Error) {
                return firstNameOrError;
            }
            user.firstName = firstNameOrError;
        }
        if (dataToUpdate.lastName) {
            const lastNameOrError = ValidString_1.ValidString.from(dataToUpdate.lastName);
            if (lastNameOrError instanceof Error) {
                return lastNameOrError;
            }
            user.lastName = lastNameOrError;
        }
        if (dataToUpdate.role) {
            const userRoleOrError = Role_1.Role.isClient(dataToUpdate.role);
            if (userRoleOrError instanceof Error) {
                return userRoleOrError;
            }
            user.role = userRoleOrError;
        }
        const updatedUser = await this.userRepository.update(user);
        if (!updatedUser) {
            return new UserUpdateProfileError_1.UserUpdateProfileError();
        }
        const { passwordHash: _, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
}
exports.UserUpdateProfileUsecase = UserUpdateProfileUsecase;
