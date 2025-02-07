import { PartPurchaseController } from "@/controllers/PartPurchaseController.ts";
import { Hono } from "hono";
import { MongoPartPurchaseRepository } from "./../../../adapters/repositories/MongoPartPurchaseRepository.ts";
import { MongoSparePartRepository } from "./../../../adapters/repositories/MongoSparePartRepository.ts";

const partPurchase = new Hono();
const mongoPartPurchaseRepository = new MongoPartPurchaseRepository();
const mongoSparePartRepository = new MongoSparePartRepository();

const partPurchaseController = new PartPurchaseController(
  mongoPartPurchaseRepository,
  mongoSparePartRepository
);

partPurchase.get("/list", partPurchaseController.listPartPurchasesHandler);

partPurchase.post("/create", partPurchaseController.createPartPurchaseHandler);

partPurchase.put(
  "/receive-or-cancel/:id",
  partPurchaseController.updatePartPurchaseStatusHandler
);

export default partPurchase;
