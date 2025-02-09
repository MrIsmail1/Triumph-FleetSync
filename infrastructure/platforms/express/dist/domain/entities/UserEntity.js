"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const Email_1 = require("../types/Email");
const Role_1 = require("../types/Role");
const ValidString_1 = require("../types/ValidString");
class UserEntity {
    constructor(identifier, firstName, lastName, email, passwordHash, role, isVerified, createdAt, updatedAt) {
        this.identifier = identifier;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordHash = passwordHash;
        this.role = role;
        this.isVerified = isVerified;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static create(firstName, lastName, email, passwordHash, role, isVerified = false) {
        const identifier = crypto.randomUUID();
        const createdAt = new Date();
        const updatetAt = new Date();
        return new UserEntity(identifier, firstName, lastName, email, passwordHash, role, isVerified, createdAt, updatetAt);
    }
    static reconstitute(data) {
        return new UserEntity(data.id, ValidString_1.ValidString.reconstitute(data.firstName), ValidString_1.ValidString.reconstitute(data.lastName), Email_1.Email.reconstitute(data.email), data.passwordHash, Role_1.Role.reconstitute(data.role), data.isVerified, data.createdAt, data.updatedAt);
    }
}
exports.UserEntity = UserEntity;
