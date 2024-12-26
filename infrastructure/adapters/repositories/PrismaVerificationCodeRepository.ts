import { VerificationCodeRepository } from "../../../application/repositories/VerificationCodeRepository";
import { VerificationCodeEntity } from "../../../domain/entities/VerificationCodeEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaVerificationCodeRepository
  implements VerificationCodeRepository
{
  public constructor(readonly database: Prisma) {}
  async findOne(
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
  async findById(identifier: string): Promise<VerificationCodeEntity | null> {
    const verificationCode = await this.database.verificationCode.findFirst({
      where: { id: identifier },
    });
    return verificationCode
      ? VerificationCodeEntity.reconstitute(verificationCode)
      : null;
  }
  async save(verificationCode: VerificationCodeEntity): Promise<void> {
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
  delete(identifier: string): Promise<void> {
    this.database.verificationCode.delete({
      where: { id: identifier },
    });
    return Promise.resolve();
  }
}
