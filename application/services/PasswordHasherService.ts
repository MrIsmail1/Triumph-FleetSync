import { Password } from "../../domain/types/Password";

export interface PasswordHasherService {
  hash(password: Password): Promise<string>;
  compare(password: string, passwordHash: string): Promise<boolean>;
}
