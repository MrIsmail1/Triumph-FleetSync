"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrismaUserRepository_1 = require("../../../../adapters/repositories/PrismaUserRepository");
const PrismaVerificationCodeRepository_1 = require("../../../../adapters/repositories/PrismaVerificationCodeRepository");
const ResendEmailService_1 = require("../../services/ResendEmailService");
const prisma_db_1 = require("../config/prisma.db");
const UserController_1 = require("../controllers/UserController");
const authorize_1 = require("../middleware/authorize");
const userRoutes = (0, express_1.Router)();
const prismaUserRepository = new PrismaUserRepository_1.PrismaUserRepository(prisma_db_1.prisma);
const verificationCodeRepository = new PrismaVerificationCodeRepository_1.PrismaVerificationCodeRepository(prisma_db_1.prisma);
const resendEmailService = new ResendEmailService_1.ResendEmailService();
const userController = new UserController_1.UserController(prismaUserRepository, verificationCodeRepository, resendEmailService);
userRoutes.get("/profile", (0, authorize_1.authorize)(["admin", "technician", "client", "manager"]), userController.showProfileHandler);
userRoutes.get("/list", (0, authorize_1.authorize)(["admin, manager"]), userController.listUsersHandler);
userRoutes.put("/update", (0, authorize_1.authorize)(["admin", "technician", "client", "manager"]), userController.updateUserProfileHandler);
userRoutes.delete("/delete", (0, authorize_1.authorize)(["admin"]), userController.deleteUserHandler);
exports.default = userRoutes;
