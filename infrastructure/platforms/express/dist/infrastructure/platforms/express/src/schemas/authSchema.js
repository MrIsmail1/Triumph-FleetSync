"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordResetSchema = exports.registerSchema = exports.loginSchema = exports.verificationCodeSchema = exports.passwordSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.string().email().min(6).max(255);
exports.passwordSchema = zod_1.z.string().min(8).max(255);
exports.verificationCodeSchema = zod_1.z.string().min(1).max(37);
exports.loginSchema = zod_1.z.object({
    email: exports.emailSchema,
    password: exports.passwordSchema,
    userAgent: zod_1.z.string().optional(),
});
exports.registerSchema = zod_1.z
    .object({
    firstName: zod_1.z.string().min(2).max(255),
    lastName: zod_1.z.string().min(2).max(255),
    email: exports.emailSchema,
    password: exports.passwordSchema,
    confirmPassword: exports.passwordSchema,
    userAgent: zod_1.z.string().optional(),
})
    .refine((data) => data.password === data.confirmPassword);
exports.passwordResetSchema = zod_1.z
    .object({
    password: exports.passwordSchema,
    confirmPassword: exports.passwordSchema,
    verificationCode: exports.verificationCodeSchema,
})
    .refine((data) => data.password === data.confirmPassword);
