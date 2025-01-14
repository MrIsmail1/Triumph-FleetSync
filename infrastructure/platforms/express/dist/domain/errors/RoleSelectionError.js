"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSelectionError = void 0;
class RoleSelectionError extends Error {
    constructor() {
        super(...arguments);
        this.name = "RoleSelectionError";
    }
}
exports.RoleSelectionError = RoleSelectionError;
