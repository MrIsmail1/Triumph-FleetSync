import { Router } from "express";
import { PrismaSessionRepository } from "../../../../adapters/repositories/PrismaSessionRepository";
import { prisma } from "../config/prisma.db";
import { SessionController } from "../controllers/SessionController";

const sessionRoutes = Router();

const prismaSessionRepository = new PrismaSessionRepository(prisma);

const sessionController = new SessionController(prismaSessionRepository);

sessionRoutes.get("/list", sessionController.listSessionsHandler);

sessionRoutes.delete("/delete/:id", sessionController.deleteSessionHandler);

export default sessionRoutes;
