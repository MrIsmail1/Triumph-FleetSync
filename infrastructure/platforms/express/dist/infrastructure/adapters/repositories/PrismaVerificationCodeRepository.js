"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaVerificationCodeRepository = void 0;
const VerificationCodeEntity_1 = require("../../../domain/entities/VerificationCodeEntity");
class PrismaVerificationCodeRepository {
    constructor(database) {
        this.database = database;
    }
    async countPasswordResetAttempts(conditions) {
        return await this.database.verificationCode.count({
            where: {
                userId: conditions.userId,
                type: conditions.type,
                createdAt: {
                    gt: conditions.createdAt,
                },
            },
        });
    }
    async findUnexpired(conditions) {
        const verificationCode = await this.database.verificationCode.findFirst({
            where: {
                id: conditions.identifier,
                type: conditions.type,
                expiresAt: {
                    gt: conditions.expiresAt,
                },
            },
        });
        return verificationCode
            ? VerificationCodeEntity_1.VerificationCodeEntity.reconstitute(verificationCode)
            : null;
    }
    async findById(identifier) {
        const verificationCode = await this.database.verificationCode.findFirst({
            where: { id: identifier },
        });
        return verificationCode
            ? VerificationCodeEntity_1.VerificationCodeEntity.reconstitute(verificationCode)
            : null;
    }
    async save(verificationCode) {
        await this.database.verificationCode.create({
            data: {
                id: verificationCode.identifier,
                type: verificationCode.type,
                userId: verificationCode.userId,
                expiresAt: verificationCode.expiresAt,
            },
        });
        return Promise.resolve();
    }
    async delete(identifier) {
        await this.database.verificationCode.delete({
            where: { id: identifier },
        });
        return Promise.resolve();
    }
}
exports.PrismaVerificationCodeRepository = PrismaVerificationCodeRepository;
