import { VerificationCodeRepository } from "../../../application/repositories/VerificationCodeRepository";
import { VerificationCodeEntity } from "../../../domain/entities/VerificationCodeEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaVerificationCodeRepository
  implements VerificationCodeRepository
{
  public constructor(readonly database: Prisma) {}
  public async countPasswordResetAttempts(
    conditions: Partial<VerificationCodeEntity>
  ): Promise<number> {
    return await this.database.verificationCode.count({
      where: {
        userId: conditions.userId,
        type: conditions.type,
        createdAt: {
          gt: conditions.createdAt,
        },
      },
    });
  }
  public async findUnexpired(
    conditions: Partial<VerificationCodeEntity>
  ): Promise<VerificationCodeEntity | null> {
    const verificationCode = await this.database.verificationCode.findFirst({
      where: {
        id: conditions.identifier,
        type: conditions.type,
        expiresAt: {
          gt: conditions.expiresAt,
        },
      },
    });
    return verificationCode
      ? VerificationCodeEntity.reconstitute(verificationCode)
      : null;
  }
  public async findById(
    identifier: string
  ): Promise<VerificationCodeEntity | null> {
    const verificationCode = await this.database.verificationCode.findFirst({
      where: { id: identifier },
    });
    return verificationCode
      ? VerificationCodeEntity.reconstitute(verificationCode)
      : null;
  }
  public async save(verificationCode: VerificationCodeEntity): Promise<void> {
    await this.database.verificationCode.create({
      data: {
        id: verificationCode.identifier,
        type: verificationCode.type,
        userId: verificationCode.userId,
        expiresAt: verificationCode.expiresAt,
      },
    });
    return Promise.resolve();
  }
  public async delete(identifier: string): Promise<void> {
    await this.database.verificationCode.delete({
      where: { id: identifier },
    });
    return Promise.resolve();
  }
}
