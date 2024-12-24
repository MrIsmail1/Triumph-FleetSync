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
  async delete(identifier: string): Promise<void> {
    console.log(identifier);
    await this.database.session.delete({ where: { id: identifier } });
    return Promise.resolve();
  }
}
