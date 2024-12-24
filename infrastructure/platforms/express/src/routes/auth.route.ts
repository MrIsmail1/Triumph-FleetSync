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
const authController = new AuthController(
  prismaUserRepository,
  prismaVerificationCodeRepository,
  prismaSessionRepository,
  bcryptPasswordHasher
);

authRoutes.post("/register", authController.registerHandler);

authRoutes.post("/login", authController.loginHandler);

authRoutes.post("/logout", authController.logoutHandler);

export default authRoutes;
