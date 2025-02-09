"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandler = void 0;
const zod_1 = __importDefault(require("zod"));
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const registerSchema = zod_1.default
    .object({
    firstName: zod_1.default.string().min(2).max(255),
    lastName: zod_1.default.string().min(2).max(255),
    email: zod_1.default.string().email().min(6).max(255),
    password: zod_1.default.string().min(6).max(255),
    confirmPassword: zod_1.default.string().min(6).max(255),
    userAgent: zod_1.default.string().optional(),
})
    .refine((data) => data.password === data.confirmPassword);
exports.registerHandler = (0, catchErrors_1.default)(async (req, res) => {
    const request = registerSchema.parse({
        ...req.body,
        userAgent: req.headers["user-agent"],
    });
});
