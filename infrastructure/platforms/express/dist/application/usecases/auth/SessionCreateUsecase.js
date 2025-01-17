"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateUsecase = void 0;
const SessionEntity_1 = require("../../../domain/entities/SessionEntity");
class SessionCreateUsecase {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async execute(userId, expiresAt, userAgent) {
        // Not sure if it better to use the old session if unexpired
        /* const existingSession = await this.sessionRepository.findUnexpiredByUserId({
          userId: userId,
          expiresAt: new Date(),
        });
        if (existingSession) {
          return existingSession;
        } */
        const newSession = SessionEntity_1.SessionEntity.create(userId, expiresAt, userAgent);
        await this.sessionRepository.save(newSession);
        return newSession;
    }
}
exports.SessionCreateUsecase = SessionCreateUsecase;
