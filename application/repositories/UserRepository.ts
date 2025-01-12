import { UserEntity } from "../../domain/entities/UserEntity";
import { Email } from "../../domain/types/Email";

export interface UserRepository {
  findAll(): Promise<UserEntity[]>;
  findByEmail(email: Email): Promise<UserEntity | null>;
  findById(userId: string): Promise<UserEntity | null>;

  save(user: UserEntity): Promise<void>;
  update(user: UserEntity): Promise<UserEntity | null>;
  delete(identifier: string): Promise<void>;
}
