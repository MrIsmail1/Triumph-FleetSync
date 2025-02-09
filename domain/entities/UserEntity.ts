import { Email } from "../types/Email";
import { Role } from "../types/Role";
import { ValidString } from "../types/ValidString";

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
    public updatedAt: Date,
  ) {}

  public static create(
    firstName: ValidString,
    lastName: ValidString,
    email: Email,
    passwordHash: string,
    role: Role,
    isVerified: boolean = false
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
      isVerified,
      createdAt,
      updatetAt
    );
  }
  public static reconstitute(data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    role: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): UserEntity {
    return new UserEntity(
      data.id,
      ValidString.reconstitute(data.firstName),
      ValidString.reconstitute(data.lastName),
      Email.reconstitute(data.email),
      data.passwordHash,
      Role.reconstitute(data.role),
      data.isVerified,
      data.createdAt,
      data.updatedAt
    );
  }
}
