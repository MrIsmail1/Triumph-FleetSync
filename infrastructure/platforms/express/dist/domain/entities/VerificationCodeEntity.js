"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationCodeEntity = void 0;
class VerificationCodeEntity {
    constructor(identifier, userId, type, expiresAt, createdAt, updatedAt) {
        this.identifier = identifier;
        this.userId = userId;
        this.type = type;
        this.expiresAt = expiresAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static create(userId, type, expiresAt) {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = new Date();
        return new VerificationCodeEntity(identifier, userId, type, expiresAt, createdAt, updatedAt);
    }
    static reconstitute(data) {
        const type = data.type;
        return new VerificationCodeEntity(data.id, data.userId, type, data.expiresAt, data.createdAt, data.updatedAt);
    }
}
exports.VerificationCodeEntity = VerificationCodeEntity;
