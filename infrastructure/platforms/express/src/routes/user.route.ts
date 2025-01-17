import { Router } from "express";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { PrismaVerificationCodeRepository } from "../../../../adapters/repositories/PrismaVerificationCodeRepository";
import { ResendEmailService } from "../../services/ResendEmailService";
import { prisma } from "../config/prisma.db";
import { UserController } from "../controllers/UserController";
import { authorize } from "../middleware/authorize";

const userRoutes = Router();

const prismaUserRepository = new PrismaUserRepository(prisma);
const verificationCodeRepository = new PrismaVerificationCodeRepository(prisma);
const resendEmailService = new ResendEmailService();

const userController = new UserController(
  prismaUserRepository,
  verificationCodeRepository,
  resendEmailService
);

userRoutes.get(
  "/profile",
  authorize(["admin", "technician", "client", "manager"]),
  userController.showProfileHandler
);
userRoutes.get(
  "/list",
  authorize(["admin, manager"]),
  userController.listUsersHandler
);

userRoutes.put(
  "/update",
  authorize(["admin", "technician", "client", "manager"]),
  userController.updateUserProfileHandler
);

userRoutes.delete(
  "/delete",
  authorize(["admin"]),
  userController.deleteUserHandler
);

export default userRoutes;
