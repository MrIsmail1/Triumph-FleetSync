import { UserRepository } from "../../../application/repositories/UserRepository";
import { UserEntity } from "../../../domain/entities/UserEntity";
import { Email } from "../../../domain/types/Email";
import { Prisma } from "../../platforms/express/src/config/prisma.db";
export class PrismaUserRepository implements UserRepository {
  public constructor(private readonly database: Prisma) {}
  findAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  findById(userId: string): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }

  /* public async findAll(): Promise<UserEntity[]> {
    const users = await this.database.user.findMany();
    return Promise.resolve(users);
  } */
  public async findByEmail(email: Email): Promise<UserEntity | null> {
    const user = await this.database.user.findFirst({
      where: { email: email.value },
    });
    if (user) {
      return Promise.resolve({
        identifier: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    }
  }
  /* public async findById(userId: string): Promise<UserEntity | null> {
    const user = await this.database.user.findFirst({
      where: { id: userId },
    });
    return user ? Promise.resolve(user) : Promise.resolve(null);
  } */
  public async save(user: UserEntity): Promise<void> {
    await this.database.user.create({
      data: {
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        email: user.email.value,
        passwordHash: user.passwordHash,
        role: user.role.value,
      },
    });
    return Promise.resolve();
  }
  public async update(user: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async delete(user: UserEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
