"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptPasswordHasherService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptPasswordHasherService {
    async hash(password) {
        const salt = await bcrypt_1.default.genSalt(10);
        return bcrypt_1.default.hash(password.value, salt);
    }
    async compare(password, passwordHash) {
        return bcrypt_1.default.compare(password, passwordHash);
    }
}
exports.BcryptPasswordHasherService = BcryptPasswordHasherService;
