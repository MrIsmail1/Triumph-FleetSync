import { Router } from "express";
import {PrismaMotorbikeRepository} from "../../../../adapters/repositories/PrismaMotorbikeRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {MotorbikeController} from "../controllers/MotorbikeController.ts";
import {PrismaUserRepository} from "../../../../adapters/repositories/PrismaUserRepository.ts";
import {authorize} from "../middleware/authorize.ts";

const motorbikeRoutes = Router();

const prismaMotorbikeRepository = new PrismaMotorbikeRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);
const motorbikeController = new MotorbikeController(prismaMotorbikeRepository, prismaUserRepository);

motorbikeRoutes.post("/create", authorize(["admin", "client", "manager"]), motorbikeController.createMotorbikeHandler);
motorbikeRoutes.get("/motorbike/:motorbikeId", authorize(["admin", "client", "manager"]), motorbikeController.getMotorbikeHandler);
motorbikeRoutes.get("/list", authorize(["admin", "client", "manager"]), motorbikeController.listMotorbikesHandler);
motorbikeRoutes.put("/update/:motorbikeId", authorize(["admin", "client", "manager"]), motorbikeController.updateMotorbikeHandler);
motorbikeRoutes.delete("/delete/:motorbikeId", authorize(["admin", "client", "manager"]), motorbikeController.deleteMotorbikeHandler);

export default motorbikeRoutes;