"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const http_1 = require("../constants/http");
const AppError_1 = __importDefault(require("../utils/AppError"));
const cookies_1 = require("../utils/cookies");
const handleZodError = (error, response) => {
    return response.status(http_1.BAD_REQUEST).json({
        message: error.message,
        errors: error.issues.map((error) => ({
            path: error.path.join("."),
            message: error.message,
        })),
    });
};
const handleAppError = (error, response) => {
    return response.status(error.statusCode).json({
        errorCode: error.errorCode,
        message: error.message,
    });
};
const errorHandler = (error, request, response, next) => {
    console.log(`PATH: ${request.path}`, error);
    if (request.path === cookies_1.REFRESH_PATH) {
        (0, cookies_1.clearAuthCookies)(response);
    }
    if (error instanceof zod_1.z.ZodError) {
        handleZodError(error, response);
        return;
    }
    if (error instanceof AppError_1.default) {
        handleAppError(error, response);
        return;
    }
    response.status(http_1.INTERNAL_SERVER_ERROR).send("Internal Server Error");
};
exports.default = errorHandler;
