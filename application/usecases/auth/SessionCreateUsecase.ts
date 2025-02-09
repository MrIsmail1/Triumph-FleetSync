import { SessionEntity } from "../../../domain/entities/SessionEntity";
import { SessionRepository } from "../../repositories/SessionRepository";

export class SessionCreateUsecase {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public async execute(userId: string, expiresAt: Date, userAgent?: string) {
    // Not sure if it better to use the old session if unexpired
    /* const existingSession = await this.sessionRepository.findUnexpiredByUserId({
      userId: userId,
      expiresAt: new Date(),
    });
    if (existingSession) {
      return existingSession;
    } */
    const newSession = SessionEntity.create(userId, expiresAt, userAgent);
    await this.sessionRepository.save(newSession);
    return newSession;
  }
}
