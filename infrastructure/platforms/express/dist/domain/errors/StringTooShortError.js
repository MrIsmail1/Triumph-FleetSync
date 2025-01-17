"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringTooShortError = void 0;
class StringTooShortError extends Error {
    constructor() {
        super(...arguments);
        this.name = "StringTooShortError";
    }
}
exports.StringTooShortError = StringTooShortError;
