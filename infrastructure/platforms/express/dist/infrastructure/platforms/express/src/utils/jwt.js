"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.refreshTokenSignOptions = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../constants/env");
const defaults = {
    audience: ["client"],
};
const accessTokenSignOptions = {
    expiresIn: "15m",
    secret: env_1.JWT_SECRET,
};
exports.refreshTokenSignOptions = {
    expiresIn: "30d",
    secret: env_1.JWT_REFRESH_SECRET,
};
const signToken = (payload, options) => {
    const { secret, ...signOptions } = options || accessTokenSignOptions;
    return jsonwebtoken_1.default.sign(payload, secret, { ...signOptions, ...defaults });
};
exports.signToken = signToken;
const verifyToken = (token, options) => {
    const { secret = env_1.JWT_SECRET, ...verifyOptions } = options || {};
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret, {
            ...defaults,
            ...verifyOptions,
        });
        return {
            payload,
        };
    }
    catch (error) {
        return {
            error: error.message,
        };
    }
};
exports.verifyToken = verifyToken;
