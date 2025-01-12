"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const http_1 = require("../constants/http");
const handleZodError = (error, response) => {
    return response.status(http_1.BAD_REQUEST).json({
        message: error.message,
        errors: error.issues.map((error) => ({
            path: error.path.join("."),
            message: error.message,
        })),
    });
};
const errorHandler = (error, request, response, next) => {
    console.log(`PATH: ${request.path}`, error);
    if (error instanceof zod_1.z.ZodError) {
        handleZodError(error, response);
        return;
    }
    response.status(http_1.INTERNAL_SERVER_ERROR).send("Internal Server Error");
};
exports.default = errorHandler;
