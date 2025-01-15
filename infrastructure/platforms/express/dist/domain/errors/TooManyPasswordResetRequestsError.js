"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyPasswordResetRequestsError = void 0;
class TooManyPasswordResetRequestsError extends Error {
    constructor() {
        super(...arguments);
        this.name = "TooManyPasswordResetRequestsError";
    }
}
exports.TooManyPasswordResetRequestsError = TooManyPasswordResetRequestsError;
