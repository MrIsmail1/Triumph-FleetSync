import { VerificationCodeRepository } from "../../../application/repositories/VerificationCodeRepository";
import { VerificationCodeEntity } from "../../../domain/entities/VerificationCodeEntity";
import { Prisma } from "../../platforms/express/src/config/prisma.db";

export class PrismaVerificationCodeRepository
  implements VerificationCodeRepository
{
  public constructor(readonly database: Prisma) {}
  findById(identifier: string): Promise<VerificationCodeEntity | null> {
    throw new Error("Method not implemented.");
  }
  /* async findById(identifier: string): Promise<VerificationCodeEntity | null> {
    const verificationCode = await this.database.verificationCode.findFirst({
      where: { id: identifier },
    });
    return Promise.resolve(verificationCode);
  } */
  async save(verificationCode: VerificationCodeEntity): Promise<void> {
    await this.database.verificationCode.create({
      data: {
        type: verificationCode.type,
        userId: verificationCode.userId,
        expiresAt: verificationCode.expiresAt,
      },
    });
    return Promise.resolve();
  }
  delete(verificationCode: VerificationCodeEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
