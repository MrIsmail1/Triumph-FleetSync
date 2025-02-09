"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailBadFormatError = void 0;
class EmailBadFormatError extends Error {
    constructor() {
        super(...arguments);
        this.name = "EmailBadFormatError";
    }
}
exports.EmailBadFormatError = EmailBadFormatError;
