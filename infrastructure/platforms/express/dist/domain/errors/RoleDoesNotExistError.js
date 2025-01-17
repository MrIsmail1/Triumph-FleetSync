"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDoesNotExistError = void 0;
class RoleDoesNotExistError extends Error {
    constructor() {
        super(...arguments);
        this.name = "RoleDoesNotExistError";
    }
}
exports.RoleDoesNotExistError = RoleDoesNotExistError;
