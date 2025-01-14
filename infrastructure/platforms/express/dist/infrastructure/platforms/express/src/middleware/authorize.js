"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const http_1 = require("../constants/http");
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const authorize = (requiredRoles) => {
    return (request, response, next) => {
        const user = request.user;
        (0, appAssert_1.default)(user, http_1.UNAUTHORIZED, "Unauthorized", "Invalid access token");
        (0, appAssert_1.default)(requiredRoles.includes(user.role), http_1.FORBIDDEN, "Unauthorized", "Access denied");
        next();
    };
};
exports.authorize = authorize;
