import { SessionEntity } from "../../domain/entities/SessionEntity";
import { SessionRepository } from "../repositories/SessionRepository";

export class SessionCreateUsecase {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public async execute(userId: string, expiresAt: Date, userAgent?: string) {
    const newSession = SessionEntity.create(userId, expiresAt, userAgent);
    await this.sessionRepository.save(newSession);
    return newSession;
  }
}
