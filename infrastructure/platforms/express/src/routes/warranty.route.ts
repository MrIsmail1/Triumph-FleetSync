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
  "/create",
  authorize(["admin", "company"]),
  warrantyController.addWarrantyHandler
);

warrantyRoutes.get(
  "/list",
  authorize(["admin", "technician", "company"]),
  warrantyController.listWarrantiesHandler
);

warrantyRoutes.delete(
  "/delete/:id",
  authorize(["admin"]),
  warrantyController.deleteWarrantyHandler
);

warrantyRoutes.put(
  "/update/:id",
  authorize(["admin"]),
  warrantyController.updateWarrantyHandler
);

export default warrantyRoutes;
