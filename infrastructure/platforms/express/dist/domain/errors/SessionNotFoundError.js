"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionNotFoundError = void 0;
class SessionNotFoundError extends Error {
    constructor() {
        super(...arguments);
        this.name = "SessionNotFoundError";
    }
}
exports.SessionNotFoundError = SessionNotFoundError;
