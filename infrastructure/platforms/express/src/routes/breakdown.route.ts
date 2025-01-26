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
  "/",
  authorize(["admin", "manager", "technician", "client"]),
  breakdownController.addBreakdownHandler
);

breakdownRoutes.get(
  "/",
  authorize(["admin", "manager", "technician", "client"]),
  breakdownController.listBreakdownsHandler
);

breakdownRoutes.get(
  "/:id",
  authorize(["admin", "manager", "technician", "client"]),
  breakdownController.listBreakdownsHandler
);

breakdownRoutes.put(
  "/:id",
  authorize(["admin", "manager", "technician"]),
  breakdownController.updateBreakdownHandler
);

breakdownRoutes.delete(
  "/:id",
  authorize(["admin"]),
  breakdownController.deleteBreakdownHandler
);

export default breakdownRoutes;
