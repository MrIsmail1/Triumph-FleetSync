"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginUsecase = void 0;
const InvalidCredentialsError_1 = require("../../../domain/errors/InvalidCredentialsError");
const Email_1 = require("../../../domain/types/Email");
class UserLoginUsecase {
    constructor(userRepository, hasher) {
        this.userRepository = userRepository;
        this.hasher = hasher;
    }
    async execute(email, password) {
        const userEmailOrError = Email_1.Email.from(email);
        if (!(userEmailOrError instanceof Error)) {
            const user = await this.userRepository.findByEmail(userEmailOrError);
            if (!user) {
                return new InvalidCredentialsError_1.InvalidCredentialsError();
            }
            const isCorrectPassword = await this.hasher.compare(password, user.passwordHash);
            if (!isCorrectPassword) {
                return new InvalidCredentialsError_1.InvalidCredentialsError();
            }
            return user;
        }
        else {
            return userEmailOrError;
        }
    }
}
exports.UserLoginUsecase = UserLoginUsecase;
