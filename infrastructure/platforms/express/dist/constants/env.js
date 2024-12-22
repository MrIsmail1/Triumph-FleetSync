"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_URI = exports.APP_ORIGIN = exports.PORT = exports.NODE_ENV = void 0;
const getEnv = (key, defaultValue) => {
    const value = process.env[key] || defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable ${key}`);
    }
    return value;
};
exports.NODE_ENV = getEnv("NODE_ENV", "development");
exports.PORT = getEnv("PORT", "4004");
exports.APP_ORIGIN = getEnv("APP_ORIGIN");
exports.MONGO_URI = getEnv("MONGO_URI");
