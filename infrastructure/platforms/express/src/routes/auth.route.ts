import { Router } from "express";
import { PrismaSessionRepository } from "../../../../adapters/repositories/PrismaSessionRepository";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { PrismaVerificationCodeRepository } from "../../../../adapters/repositories/PrismaVerificationCodeRepository";
import { BcryptPasswordHasherService } from "../../services/BcryptPasswordHasherService";
import { ResendEmailService } from "../../services/ResendEmailService";
import { prisma } from "../config/prisma.db";
import { AuthController } from "../controllers/AuthController";

const authRoutes = Router();
const prismaUserRepository = new PrismaUserRepository(prisma);
const prismaVerificationCodeRepository = new PrismaVerificationCodeRepository(
  prisma
);
const prismaSessionRepository = new PrismaSessionRepository(prisma);
const bcryptPasswordHasher = new BcryptPasswordHasherService();
const resendEmailService = new ResendEmailService();
const authController = new AuthController(
  prismaUserRepository,
  prismaVerificationCodeRepository,
  prismaSessionRepository,
  bcryptPasswordHasher,
  resendEmailService
);

authRoutes.post("/register", authController.registerHandler);

authRoutes.post("/login", authController.loginHandler);

authRoutes.get("/logout", authController.logoutHandler);

authRoutes.get("/refresh", authController.refreshHandler);

authRoutes.get("/email/verify/:code", authController.verifyEmailHandler);

authRoutes.post("/password/forgot", authController.sendPasswordResetHandler);

authRoutes.post("/password/reset", authController.resetPasswordHandler);

export default authRoutes;
