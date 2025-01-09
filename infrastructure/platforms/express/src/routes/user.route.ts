import { Router } from "express";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { prisma } from "../config/prisma.db";
import { UserController } from "../controllers/UserController";
import { authorize } from "../middleware/authorize";

const userRoutes = Router();

const prismaUserRepository = new PrismaUserRepository(prisma);

const userController = new UserController(prismaUserRepository);

userRoutes.get(
  "/profile",
  authorize(["Admin", "Technician", "Client", "Manager"]),
  userController.showProfileHandler
);
userRoutes.get(
  "/list",
  authorize(["Admin, Manager"]),
  userController.listUsersHandler
);

export default userRoutes;
