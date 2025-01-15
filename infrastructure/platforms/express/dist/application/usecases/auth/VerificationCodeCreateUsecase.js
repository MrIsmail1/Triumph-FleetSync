"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationCodeCreateUsecase = void 0;
const VerificationCodeEntity_1 = require("../../../domain/entities/VerificationCodeEntity");
class VerificationCodeCreateUsecase {
    constructor(verificationCodeRepository) {
        this.verificationCodeRepository = verificationCodeRepository;
    }
    async execute(userId, type, expiresAt) {
        const existingVerificationCode = await this.verificationCodeRepository.findById(userId);
        if (existingVerificationCode) {
            return existingVerificationCode;
        }
        const verificationCode = VerificationCodeEntity_1.VerificationCodeEntity.create(userId, type, expiresAt);
        await this.verificationCodeRepository.save(verificationCode);
        return verificationCode;
    }
}
exports.VerificationCodeCreateUsecase = VerificationCodeCreateUsecase;
