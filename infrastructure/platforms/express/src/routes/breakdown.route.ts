import { Router } from "express";
import { PrismaBreakdownRepository } from "../../../../adapters/repositories/PrismaBreakdownRepository";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { prisma } from "../config/prisma.db";
import { BreakdownController } from "../controllers/BreakdownController";
import { authorize } from "../middleware/authorize";

const breakdownRoutes = Router();

const prismaBreakdownRepository = new PrismaBreakdownRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);
const breakdownController = new BreakdownController(
  prismaBreakdownRepository,
  prismaUserRepository
);

breakdownRoutes.post(
  "/create",
  authorize(["admin", "company", "technician", "client"]),
  breakdownController.addBreakdownHandler
);

breakdownRoutes.get(
  "/list",
  authorize(["admin", "company", "technician", "client"]),
  breakdownController.listBreakdownsHandler
);

breakdownRoutes.get(
  "/breakdown/:id",
  authorize(["admin", "company", "technician", "client"]),
  breakdownController.listBreakdownsHandler
);

breakdownRoutes.put(
  "/update/:id",
  authorize(["admin", "company", "technician"]),
  breakdownController.updateBreakdownHandler
);

breakdownRoutes.delete(
  "/delete/:id",
  authorize(["admin"]),
  breakdownController.deleteBreakdownHandler
);

export default breakdownRoutes;
