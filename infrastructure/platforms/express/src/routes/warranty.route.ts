import { Router } from "express";
import { PrismaWarrantyRepository } from "../../../../adapters/repositories/PrismaWarrantyRepository";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { prisma } from "../config/prisma.db";
import { WarrantyController } from "../controllers/WarrantyController";
import { authorize } from "../middleware/authorize";

const warrantyRoutes = Router();

const prismaWarrantyRepository = new PrismaWarrantyRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);
const warrantyController = new WarrantyController(
  prismaWarrantyRepository,
  prismaUserRepository
);

warrantyRoutes.post(
  "/",
  authorize(["admin", "manager"]),
  warrantyController.addWarrantyHandler
);

warrantyRoutes.get(
  "/",
  authorize(["admin", "technician", "manager"]),
  warrantyController.listWarrantiesHandler
);

warrantyRoutes.delete(
  "/:id",
  authorize(["admin"]),
  warrantyController.deleteWarrantyHandler
);

export default warrantyRoutes;
