import { SessionRepository } from "../../../application/repositories/SessionRepository";
import { SessionEntity } from "../../../domain/entities/SessionEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaSessionRepository implements SessionRepository {
  public constructor(readonly database: Prisma) {}
  async findById(identifier: string): Promise<SessionEntity | null> {
    const session = await this.database.session.findFirst({
      where: { id: identifier },
    });
    return session ? SessionEntity.reconstitute(session) : null;
  }
  async save(userSession: SessionEntity): Promise<void> {
    await this.database.session.create({
      data: {
        userId: userSession.userId,
        expiresAt: userSession.expiresAt,
        userAgent: userSession.userAgent,
      },
    });
    return Promise.resolve();
  }
  delete(userSession: SessionEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
