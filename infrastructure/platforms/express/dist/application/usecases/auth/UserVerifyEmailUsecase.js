"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerifyEmailUsecase = void 0;
const UserEmailVerificationFailedError_1 = require("../../../domain/errors/UserEmailVerificationFailedError");
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
const VerificationCodeNotFoundError_1 = require("../../../domain/errors/VerificationCodeNotFoundError");
const VerificationCodeType_1 = require("../../../domain/types/VerificationCodeType");
class UserVerifyEmailUsecase {
    constructor(userRepository, verificationCodeRepository) {
        this.userRepository = userRepository;
        this.verificationCodeRepository = verificationCodeRepository;
    }
    async execute(code) {
        const verificationCode = await this.verificationCodeRepository.findUnexpired({
            identifier: code,
            type: VerificationCodeType_1.VerificationCodeType.EmailVerification,
            expiresAt: new Date(),
        });
        if (!verificationCode) {
            return new VerificationCodeNotFoundError_1.VerificationCodeNotFoundError();
        }
        const user = await this.userRepository.findById(verificationCode.userId);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        const updatedUser = await this.userRepository.update({
            ...user,
            isVerified: true,
        });
        if (!updatedUser) {
            return new UserEmailVerificationFailedError_1.UserEmailVerificationFailedError();
        }
        await this.verificationCodeRepository.delete(verificationCode.identifier);
        const { passwordHash: _, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
}
exports.UserVerifyEmailUsecase = UserVerifyEmailUsecase;
