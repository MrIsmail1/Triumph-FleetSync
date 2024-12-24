import { SessionEntity } from "../../domain/entities/SessionEntity";

export interface SessionRepository {
  findById(identifier: string): Promise<SessionEntity | null>;
  save(userSession: SessionEntity): Promise<void>;
  delete(identifier: string): Promise<void>;
}
