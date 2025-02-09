import {Router} from "express";
import {PrismaModelMotorbikeRepository} from "../../../../adapters/repositories/PrismaModelMotorbikeRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {ModelMotorbikeController} from "../controllers/ModelMotorbikeController.ts";
import {authorize} from "../middleware/authorize.ts";

const modelMotorbikeRouter = Router();

const prismaModelMotorbikeRepository = new PrismaModelMotorbikeRepository(prisma);
const modelMotorbikeController = new ModelMotorbikeController(prismaModelMotorbikeRepository);

modelMotorbikeRouter.post("/create", authorize(["admin"]), modelMotorbikeController.createModelMotorbikeHandler);
modelMotorbikeRouter.get("/list", authorize(["admin"]), modelMotorbikeController.listModelMotorbikesHandler);
modelMotorbikeRouter.get("/modelmotorbike/:modelMotorbikeId", authorize(["admin"]), modelMotorbikeController.getModelMotorbikeHandler);
modelMotorbikeRouter.put("/update/:modelMotorbikeId", authorize(["admin"]), modelMotorbikeController.updateModelMotorbikeHandler);
modelMotorbikeRouter.delete("/delete/:modelMotorbikeId", authorize(["admin"]), modelMotorbikeController.deleteModelMotorbikeHandler);

export default modelMotorbikeRouter;
