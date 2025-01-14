"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_assert_1 = __importDefault(require("node:assert"));
const AppError_1 = __importDefault(require("./AppError"));
/**
 * Asserts that the condition is true, otherwise throws an AppError
 */
const appAssert = (condition, httpStatusCode, errorCode, message) => (0, node_assert_1.default)(condition, new AppError_1.default(httpStatusCode, errorCode, message));
exports.default = appAssert;
