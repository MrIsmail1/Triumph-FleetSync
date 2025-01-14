"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShowProfileUsecase = void 0;
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
class UserShowProfileUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        const { passwordHash: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
exports.UserShowProfileUsecase = UserShowProfileUsecase;
