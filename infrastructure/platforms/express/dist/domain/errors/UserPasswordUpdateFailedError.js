"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordUpdateFailedError = void 0;
class UserPasswordUpdateFailedError extends Error {
    constructor() {
        super(...arguments);
        this.name = "UserPasswordUpdateFailedError";
    }
}
exports.UserPasswordUpdateFailedError = UserPasswordUpdateFailedError;
