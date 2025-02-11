import { MaintenanceReminderService } from "../../../../application/services/MaintenanceReminderService.ts";
import { PrismaMaintenanceRepository } from "../../../adapters/repositories/PrismaMaintenanceRepository.ts";
import { PrismaUserRepository } from "../../../adapters/repositories/PrismaUserRepository";
import { ResendEmailService } from "../services/ResendEmailService";
import { prisma } from "../src/config/prisma.db.ts";
import cron from "node-cron";

const maintenanceRepository = new PrismaMaintenanceRepository(prisma);
const userRepository = new PrismaUserRepository(prisma);
const emailService = new ResendEmailService();
const maintenanceReminderService = new MaintenanceReminderService(
  maintenanceRepository,
  userRepository,
  emailService
);

// Planifier la tâche CRON : Exécution tous les jours à 08h00
cron.schedule("0 8 * * *", async () => {
  await maintenanceReminderService.sendMaintenanceReminders();
});