"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const RoleDoesNotExistError_1 = require("../errors/RoleDoesNotExistError");
const RoleSelectionError_1 = require("../errors/RoleSelectionError");
class Role {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        const role = value.trim();
        if (!this.validRoles.includes(role)) {
            return new RoleDoesNotExistError_1.RoleDoesNotExistError();
        }
        return new Role(role);
    }
    static isClient(value) {
        const role = value.trim();
        if (role != "client") {
            return new RoleSelectionError_1.RoleSelectionError();
        }
        return new Role(role);
    }
    static reconstitute(value) {
        return new Role(value);
    }
}
exports.Role = Role;
Role.validRoles = [
    "admin",
    "technician",
    "client",
    "manager",
];
