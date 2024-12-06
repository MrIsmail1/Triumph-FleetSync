import { UserEntity } from "../../domain/entities/UserEntity";
import { Email } from "../../domain/types/Email";

export interface UserRepository {
  findByEmail(email: Email): Promise<UserEntity | null>;
  save(user: UserEntity): Promise<void>;
}
