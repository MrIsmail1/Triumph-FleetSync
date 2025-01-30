import { SparePartController } from "@/controllers/SparePartController.ts";
import { Hono } from "hono";

const sparePart = new Hono();
const prismaSparePartRepositoy = new PrismaSparePartRepositoy();
const sparePartController = new SparePartController(prismaSparePartRepositoy);

sparePart.get("/list", sparePartController.listSparePartsHandler);

export default sparePart;
