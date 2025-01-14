"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordBadFormatError = void 0;
class PasswordBadFormatError extends Error {
    constructor() {
        super(...arguments);
        this.name = "PasswordBadFormatError";
    }
}
exports.PasswordBadFormatError = PasswordBadFormatError;
