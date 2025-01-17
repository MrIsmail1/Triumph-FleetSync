"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedActionError = void 0;
class UnauthorizedActionError extends Error {
    constructor() {
        super(...arguments);
        this.name = "UnauthorizedActionError";
    }
}
exports.UnauthorizedActionError = UnauthorizedActionError;
