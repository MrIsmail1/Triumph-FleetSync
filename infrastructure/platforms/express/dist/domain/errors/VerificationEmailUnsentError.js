"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationEmailUnsentError = void 0;
class VerificationEmailUnsentError extends Error {
    constructor() {
        super(...arguments);
        this.name = "VerificationEmailUnsentError";
    }
}
exports.VerificationEmailUnsentError = VerificationEmailUnsentError;
