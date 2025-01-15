"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const UserEntity_1 = require("../../../domain/entities/UserEntity");
class PrismaUserRepository {
    constructor(database) {
        this.database = database;
    }
    async findAll() {
        const users = await this.database.user.findMany();
        return users.map(UserEntity_1.UserEntity.reconstitute);
    }
    async findByEmail(email) {
        const user = await this.database.user.findFirst({
            where: { email: email.value },
        });
        return user ? UserEntity_1.UserEntity.reconstitute(user) : null;
    }
    async findById(userId) {
        const user = await this.database.user.findFirst({
            where: { id: userId },
        });
        return user ? UserEntity_1.UserEntity.reconstitute(user) : null;
    }
    async save(user) {
        await this.database.user.create({
            data: {
                id: user.identifier,
                firstName: user.firstName.value,
                lastName: user.lastName.value,
                email: user.email.value,
                passwordHash: user.passwordHash,
                role: user.role.value,
            },
        });
        return Promise.resolve();
    }
    async update(user) {
        const updatedUser = await this.database.user.update({
            where: { id: user.identifier },
            data: {
                firstName: user.firstName.value,
                lastName: user.lastName.value,
                email: user.email.value,
                passwordHash: user.passwordHash,
                role: user.role.value,
                isVerified: user.isVerified,
            },
        });
        return updatedUser ? UserEntity_1.UserEntity.reconstitute(updatedUser) : null;
    }
    async delete(identifier) {
        await this.database.user.delete({ where: { id: identifier } });
        return Promise.resolve();
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
