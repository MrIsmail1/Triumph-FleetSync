"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteUsecase = void 0;
const UnauthorizedActionError_1 = require("../../../domain/errors/UnauthorizedActionError");
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
class UserDeleteUsecase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(currentUserId, userToDeleteId) {
        const user = await this.userRepository.findById(currentUserId);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        if (user.role.value !== "admin" && user.identifier !== userToDeleteId) {
            return new UnauthorizedActionError_1.UnauthorizedActionError();
        }
        await this.userRepository.delete(userToDeleteId);
        return true;
    }
}
exports.UserDeleteUsecase = UserDeleteUsecase;
