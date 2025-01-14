import { SessionEntity } from "../../domain/entities/SessionEntity";

export interface SessionRepository {
  findUnexpiredByUserId(
    conditions: Partial<SessionEntity>
  ): Promise<SessionEntity | null>;
  save(userSession: SessionEntity): Promise<void>;
  delete(identifier: string): Promise<void>;
  deleteByUserId(userId: string): Promise<void>;
  findById(identifier: string): Promise<SessionEntity | null>;
  findAllUnexpiredByUserId(
    conditions: Partial<SessionEntity>
  ): Promise<SessionEntity[] | null>;
  deleteUserSession(
    sessionIdentifier: string,
    userIdentifier: string
  ): Promise<void | false>;
}
