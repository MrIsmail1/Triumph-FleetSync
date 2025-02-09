"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEntity = void 0;
class SessionEntity {
    constructor(identifier, userId, expiresAt, createdAt, userAgent) {
        this.identifier = identifier;
        this.userId = userId;
        this.expiresAt = expiresAt;
        this.createdAt = createdAt;
        this.userAgent = userAgent;
    }
    static create(userId, expiresAt, userAgent) {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        return new SessionEntity(identifier, userId, expiresAt, createdAt, userAgent);
    }
    static reconstitute(data) {
        return new SessionEntity(data.id, data.userId, data.expiresAt, data.createdAt, data.userAgent);
    }
}
exports.SessionEntity = SessionEntity;
