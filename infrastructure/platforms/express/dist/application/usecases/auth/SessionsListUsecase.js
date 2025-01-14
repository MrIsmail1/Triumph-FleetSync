"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionListUseCase = void 0;
const SessionNotFoundError_1 = require("../../../domain/errors/SessionNotFoundError");
class SessionListUseCase {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async execute(userId) {
        const sessions = await this.sessionRepository.findAllUnexpiredByUserId({
            userId: userId,
            expiresAt: new Date(),
        });
        if (!sessions) {
            return new SessionNotFoundError_1.SessionNotFoundError();
        }
        return sessions;
    }
}
exports.SessionListUseCase = SessionListUseCase;
