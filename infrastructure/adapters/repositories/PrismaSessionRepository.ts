import { SessionRepository } from "../../../application/repositories/SessionRepository";
import { SessionEntity } from "../../../domain/entities/SessionEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaSessionRepository implements SessionRepository {
  public constructor(readonly database: Prisma) {}
  findById(identifier: string): Promise<SessionEntity> {
    throw new Error("Method not implemented.");
  }
  /* async findById(identifier: string): Promise<SessionEntity> {
    const session = await this.database.session.findFirst({
      where: { id: identifier },
    });
    return session ? Promise.resolve(session) : Promise.resolve(null);
  } */
  async save(userSession: SessionEntity): Promise<void> {
    await this.database.session.create({
      data: {
        userId: userSession.userId,
        expiresAt: userSession.expiresAt,
      },
    });
    return Promise.resolve();
  }
  delete(userSession: SessionEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
