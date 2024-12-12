import { Email } from "../types/Email";
import { Role } from "../types/Role";
import { ValidString } from "../types/String";

export class UserEntity {
  private constructor(
    public identifier: string,
    public firstName: ValidString,
    public lastName: ValidString,
    public email: Email,
    public passwordHash: string,
    public role: Role,
    public isVerified: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  public static create(
    firstName: ValidString,
    lastName: ValidString,
    email: Email,
    passwordHash: string,
    role: Role,
    isVerfied: boolean = false
  ): UserEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatetAt = new Date();
    return new UserEntity(
      identifier,
      firstName,
      lastName,
      email,
      passwordHash,
      role,
      isVerfied,
      updatetAt,
      createdAt
    );
  }
}
