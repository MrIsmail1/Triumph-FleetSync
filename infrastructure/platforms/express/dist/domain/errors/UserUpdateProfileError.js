"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateProfileError = void 0;
class UserUpdateProfileError extends Error {
    constructor() {
        super(...arguments);
        this.name = "UserUpdateProfileError";
    }
}
exports.UserUpdateProfileError = UserUpdateProfileError;
