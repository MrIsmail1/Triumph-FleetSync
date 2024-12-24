import { Router } from "express";
import { PrismaSessionRepository } from "../../../../adapters/repositories/PrismaSessionRepository";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { PrismaVerificationCodeRepository } from "../../../../adapters/repositories/PrismaVerificationCodeRepository";
import { BcryptPasswordHasherService } from "../../services/BcryptPasswordHasherService";
import { prisma } from "../config/prisma.db";
import { AuthController } from "../controllers/AuthController";

const authRoutes = Router();
const prismaUserRepository = new PrismaUserRepository(prisma);
const prismaVerificationCodeRepository = new PrismaVerificationCodeRepository(
  prisma
);
const prismaSessionRepository = new PrismaSessionRepository(prisma);
const bcryptPasswordHasher = new BcryptPasswordHasherService();

authRoutes.post(
  "/register",
  new AuthController(
    prismaUserRepository,
    prismaVerificationCodeRepository,
    prismaSessionRepository,
    bcryptPasswordHasher
  ).registerHandler
);

authRoutes.post(
  "/login",
  new AuthController(
    prismaUserRepository,
    prismaVerificationCodeRepository,
    prismaSessionRepository,
    bcryptPasswordHasher
  ).registerHandler
);

export default authRoutes;
