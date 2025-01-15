"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationCodeNotFoundError = void 0;
class VerificationCodeNotFoundError extends Error {
    constructor() {
        super(...arguments);
        this.name = "VerificationCodeNotFoundError";
    }
}
exports.VerificationCodeNotFoundError = VerificationCodeNotFoundError;
