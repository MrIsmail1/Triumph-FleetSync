"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResetPasswordUsecase = void 0;
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
const UserPasswordUpdateFailedError_1 = require("../../../domain/errors/UserPasswordUpdateFailedError");
const VerificationCodeNotFoundError_1 = require("../../../domain/errors/VerificationCodeNotFoundError");
const Password_1 = require("../../../domain/types/Password");
const VerificationCodeType_1 = require("../../../domain/types/VerificationCodeType");
class UserResetPasswordUsecase {
    constructor(userRepository, verificationCodeRepository, sessionRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.verificationCodeRepository = verificationCodeRepository;
        this.sessionRepository = sessionRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute({ password, verificationCode }) {
        const verificationCodeExits = await this.verificationCodeRepository.findUnexpired({
            identifier: verificationCode,
            type: VerificationCodeType_1.VerificationCodeType.PasswordReset,
            expiresAt: new Date(),
        });
        if (!verificationCodeExits) {
            return new VerificationCodeNotFoundError_1.VerificationCodeNotFoundError();
        }
        const user = await this.userRepository.findById(verificationCodeExits.userId);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        const passwordOrError = Password_1.Password.from(password);
        if (passwordOrError instanceof Error) {
            return passwordOrError;
        }
        const hashedPassword = await this.passwordHasher.hash(passwordOrError);
        user.passwordHash = hashedPassword;
        const updatedUser = await this.userRepository.update(user);
        if (!updatedUser) {
            return new UserPasswordUpdateFailedError_1.UserPasswordUpdateFailedError();
        }
        await this.verificationCodeRepository.delete(verificationCodeExits.identifier);
        await this.sessionRepository.deleteByUserId(user.identifier);
        const { passwordHash: _, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
}
exports.UserResetPasswordUsecase = UserResetPasswordUsecase;
