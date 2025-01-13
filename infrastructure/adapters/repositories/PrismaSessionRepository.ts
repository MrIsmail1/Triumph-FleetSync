import { SessionRepository } from "../../../application/repositories/SessionRepository";
import { SessionEntity } from "../../../domain/entities/SessionEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaSessionRepository implements SessionRepository {
  public constructor(readonly database: Prisma) {}
  findByUserId(userId: string): Promise<SessionEntity | null> {
    throw new Error("Method not implemented.");
  }
  public async deleteByUserId(userId: string): Promise<void> {
    await this.database.session.deleteMany({ where: { userId: userId } });
    return Promise.resolve();
  }
  public async findById(identifier: string): Promise<SessionEntity | null> {
    const session = await this.database.session.findFirst({
      where: { id: identifier },
    });
    return session ? SessionEntity.reconstitute(session) : null;
  }
  public async save(userSession: SessionEntity): Promise<void> {
    console.log(userSession);
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
  public async delete(identifier: string): Promise<void> {
    await this.database.session.delete({ where: { id: identifier } });
    return Promise.resolve();
  }
  public async findUnexpiredByUserId(
    conditions: Partial<SessionEntity>
  ): Promise<SessionEntity | null> {
    const session = await this.database.session.findFirst({
      where: {
        userId: conditions.userId,
        expiresAt: {
          gt: conditions.expiresAt,
        },
      },
    });
    return session ? SessionEntity.reconstitute(session) : null;
  }

  public async findAllUnexpiredByUserId(
    conditions: Partial<SessionEntity>
  ): Promise<SessionEntity[] | null> {
    const sessions = await this.database.session.findMany({
      where: {
        userId: conditions.userId,
        expiresAt: {
          gt: conditions.expiresAt,
        },
      },
    });
    return sessions.map((session) => SessionEntity.reconstitute(session));
  }

  public async deleteUserSession(
    sessionIdentifier: string,
    userIdentifier: string
  ): Promise<void | null> {
    await this.database.session.deleteMany({
      where: {
        id: sessionIdentifier,
        userId: userIdentifier,
      },
    });
    return Promise.resolve();
  }
}
