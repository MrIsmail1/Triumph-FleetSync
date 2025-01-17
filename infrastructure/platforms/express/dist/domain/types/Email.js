"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const EmailBadFormatError_1 = require("../errors/EmailBadFormatError");
class Email {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email = value.trim();
        if (!emailPattern.test(email)) {
            return new EmailBadFormatError_1.EmailBadFormatError();
        }
        return new Email(email);
    }
    static reconstitute(value) {
        return new Email(value);
    }
}
exports.Email = Email;
