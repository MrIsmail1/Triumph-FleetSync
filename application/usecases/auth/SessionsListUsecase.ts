import { SessionNotFoundError } from "../../../domain/errors/SessionNotFoundError";
import { SessionRepository } from "../../repositories/SessionRepository";
export class SessionListUseCase {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public async execute(userId: string) {
    const sessions = await this.sessionRepository.findAllUnexpiredByUserId({
      userId: userId,
      expiresAt: new Date(),
    });

    if (!sessions) {
      return new SessionNotFoundError();
    }

    return sessions;
  }
}
