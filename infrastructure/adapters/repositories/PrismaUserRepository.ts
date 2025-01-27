import { UserRepository } from "../../../application/repositories/UserRepository";
import { UserEntity } from "../../../domain/entities/UserEntity";
import { Email } from "../../../domain/types/Email";
import { is } from "../../platforms/express/node_modules/@types/whatwg-url/lib/URL.d";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaUserRepository implements UserRepository {
  public constructor(private readonly database: Prisma) {}

  public async findAll(): Promise<UserEntity[]> {
    const users = await this.database.user.findMany();
    return users.map(UserEntity.reconstitute);
  }
  public async findByEmail(email: Email): Promise<UserEntity | null> {
    const user = await this.database.user.findFirst({
      where: { email: email.value },
    });
    return user ? UserEntity.reconstitute(user) : null;
  }
  public async findById(userId: string): Promise<UserEntity | null> {
    const user = await this.database.user.findFirst({
      where: { id: userId },
    });
    return user ? UserEntity.reconstitute(user) : null;
  }
  public async save(user: UserEntity): Promise<void> {
    await this.database.user.create({
      data: {
        id: user.identifier,
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        email: user.email.value,
        passwordHash: user.passwordHash,
        role: user.role.value,
      },
    });
    return Promise.resolve();
  }
  public async update(user: UserEntity): Promise<UserEntity | null> {
    const updatedUser = await this.database.user.update({
      where: { id: user.identifier },
      data: {
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        email: user.email.value,
        passwordHash: user.passwordHash,
        role: user.role.value,
        isVerified: user.isVerified,
      },
    });
    return updatedUser ? UserEntity.reconstitute(updatedUser) : null;
  }
  public async delete(identifier: string): Promise<void> {
    await this.database.user.delete({ where: { id: identifier } });
    return Promise.resolve();
  }
}
