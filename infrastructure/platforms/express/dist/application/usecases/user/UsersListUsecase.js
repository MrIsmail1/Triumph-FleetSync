"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersListUsecase = void 0;
const AccessDeniedError_1 = require("../../../domain/errors/AccessDeniedError");
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
class UsersListUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(currentUserIdentifier) {
        const currentUser = await this.userRepository.findById(currentUserIdentifier);
        if (!currentUser) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        if (currentUser.role.value !== "admin") {
            return new AccessDeniedError_1.AccessDeniedError();
        }
        const users = await this.userRepository.findAll();
        const usersWithoutPassword = users.map((user) => {
            const { passwordHash, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        return usersWithoutPassword;
    }
}
exports.UsersListUsecase = UsersListUsecase;
