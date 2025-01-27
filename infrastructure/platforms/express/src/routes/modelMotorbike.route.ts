import { Router } from "express";
import { PrismaModelMotorbikeRepository } from "../../../../adapters/repositories/PrismaModelMotorbikeRepository.ts";
import { prisma } from "../config/prisma.db.ts";
import { ModelMotorbikeController } from "../controllers/ModelMotorbikeController.ts";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository.ts";
import { authorize } from "../middleware/authorize.ts";

const modelMotorbikeRouter = Router();

const prismaModelMotorbikeRepository = new PrismaModelMotorbikeRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);
const modelMotorbikeController = new ModelMotorbikeController(
    prismaModelMotorbikeRepository,
    prismaUserRepository
);

modelMotorbikeRouter.post("/create", authorize(["admin", "client"]), modelMotorbikeController.createModelMotorbikeHandler);
modelMotorbikeRouter.get("/list", authorize(["admin", "client"]), modelMotorbikeController.listModelMotorbikesHandler);
modelMotorbikeRouter.get("/modelmotorbike/:modelMotorbikeId", authorize(["admin", "client"]), modelMotorbikeController.getModelMotorbikeHandler);
modelMotorbikeRouter.put("/update/:modelMotorbikeId", authorize(["admin"]), modelMotorbikeController.updateModelMotorbikeHandler);
modelMotorbikeRouter.delete("/delete/:modelMotorbikeId", authorize(["admin"]), modelMotorbikeController.deleteModelMotorbikeHandler);

export default modelMotorbikeRouter;
