"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailVerificationFailedError = void 0;
class UserEmailVerificationFailedError extends Error {
    constructor() {
        super(...arguments);
        this.name = "UserEmailVerificationFailedError";
    }
}
exports.UserEmailVerificationFailedError = UserEmailVerificationFailedError;
