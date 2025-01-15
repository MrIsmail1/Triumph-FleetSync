"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatePasswordResetLinkUsecase = void 0;
const VerificationCodeEntity_1 = require("../../../domain/entities/VerificationCodeEntity");
const TooManyPasswordResetRequestsError_1 = require("../../../domain/errors/TooManyPasswordResetRequestsError");
const UserNotFoundError_1 = require("../../../domain/errors/UserNotFoundError");
const Email_1 = require("../../../domain/types/Email");
const VerificationCodeType_1 = require("../../../domain/types/VerificationCodeType");
class UserCreatePasswordResetLinkUsecase {
    constructor(userRepository, verificationCodeRepository) {
        this.userRepository = userRepository;
        this.verificationCodeRepository = verificationCodeRepository;
    }
    async execute(email, requestTimeLimit, requestExpiresAt, baseUrl) {
        const userEmailOrError = Email_1.Email.from(email);
        if (userEmailOrError instanceof Error) {
            return userEmailOrError;
        }
        const user = await this.userRepository.findByEmail(userEmailOrError);
        if (!user) {
            return new UserNotFoundError_1.UserNotFoundError();
        }
        const countVerificationCodes = await this.verificationCodeRepository.countPasswordResetAttempts({
            userId: user.identifier,
            type: VerificationCodeType_1.VerificationCodeType.PasswordReset,
            createdAt: requestTimeLimit,
        });
        if (countVerificationCodes >= 1) {
            return new TooManyPasswordResetRequestsError_1.TooManyPasswordResetRequestsError();
        }
        const verificationCode = await VerificationCodeEntity_1.VerificationCodeEntity.create(user.identifier, VerificationCodeType_1.VerificationCodeType.PasswordReset, requestExpiresAt);
        await this.verificationCodeRepository.save(verificationCode);
        const resetPasswordUrl = `${baseUrl}/password/reset?code=${verificationCode.identifier}&exp=${requestExpiresAt.getTime()}`;
        return {
            userEmail: user.email.value,
            resetLink: resetPasswordUrl,
        };
    }
}
exports.UserCreatePasswordResetLinkUsecase = UserCreatePasswordResetLinkUsecase;
