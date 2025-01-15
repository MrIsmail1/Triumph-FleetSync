"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const PasswordBadFormatError_1 = require("../errors/PasswordBadFormatError");
class Password {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const password = value.trim();
        if (!passwordPattern.test(password)) {
            return new PasswordBadFormatError_1.PasswordBadFormatError();
        }
        return new Password(password);
    }
}
exports.Password = Password;
