import { PasswordHasherService } from "@application/services/PasswordHasherService";
import { Password } from "@domain/types/Password";
import bcrypt from "bcrypt";

export class BcryptPasswordHasherService implements PasswordHasherService {
  public async hash(password: Password): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password.value, salt);
  }
  public async compare(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
