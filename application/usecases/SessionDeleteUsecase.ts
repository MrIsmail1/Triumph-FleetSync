import { SessionRepository } from "../repositories/SessionRepository";

export class SessionDeleteUsecase {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public async execute(identifier: string) {
    return await this.sessionRepository.delete(identifier);
  }
}
