"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTooLongError = void 0;
class StringTooLongError extends Error {
    constructor() {
        super(...arguments);
        this.name = "StringTooLongError";
    }
}
exports.StringTooLongError = StringTooLongError;
