"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSessionRepository = void 0;
const SessionEntity_1 = require("../../../domain/entities/SessionEntity");
class PrismaSessionRepository {
    constructor(database) {
        this.database = database;
    }
    findByUserId(userId) {
        throw new Error("Method not implemented.");
    }
    async deleteByUserId(userId) {
        await this.database.session.deleteMany({ where: { userId: userId } });
        return Promise.resolve();
    }
    async findById(identifier) {
        const session = await this.database.session.findFirst({
            where: { id: identifier },
        });
        return session ? SessionEntity_1.SessionEntity.reconstitute(session) : null;
    }
    async save(userSession) {
        await this.database.session.create({
            data: {
                id: userSession.identifier,
                userId: userSession.userId,
                expiresAt: userSession.expiresAt,
                userAgent: userSession.userAgent,
            },
        });
        return Promise.resolve();
    }
    async delete(identifier) {
        await this.database.session.delete({ where: { id: identifier } });
        return Promise.resolve();
    }
    async findUnexpiredByUserId(conditions) {
        const session = await this.database.session.findFirst({
            where: {
                userId: conditions.userId,
                expiresAt: {
                    gt: conditions.expiresAt,
                },
            },
        });
        return session ? SessionEntity_1.SessionEntity.reconstitute(session) : null;
    }
    async findAllUnexpiredByUserId(conditions) {
        const sessions = await this.database.session.findMany({
            where: {
                userId: conditions.userId,
                expiresAt: {
                    gt: conditions.expiresAt,
                },
            },
        });
        return sessions.map((session) => SessionEntity_1.SessionEntity.reconstitute(session));
    }
    async deleteUserSession(sessionIdentifier, userIdentifier) {
        const deleted = await this.database.session.deleteMany({
            where: {
                id: sessionIdentifier,
                userId: userIdentifier,
            },
        });
        if (deleted.count == 0) {
            return false;
        }
        return Promise.resolve();
    }
}
exports.PrismaSessionRepository = PrismaSessionRepository;
