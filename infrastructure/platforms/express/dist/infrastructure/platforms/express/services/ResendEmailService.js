"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendEmailService = void 0;
const resend_1 = __importDefault(require("../src/config/resend"));
const env_1 = require("../src/constants/env");
const getFromEmail = () => env_1.NODE_ENV === "development" ? "onboarding@resend.dev" : env_1.EMAIL_SENDER;
const getToEmail = (to) => env_1.NODE_ENV === "development" ? "delivered@resend.dev" : to;
class ResendEmailService {
    async send({ to, subject, text, html }) {
        return await resend_1.default.emails.send({
            from: getFromEmail(),
            to: getToEmail(to),
            subject: subject,
            text: text,
            html: html,
        });
    }
}
exports.ResendEmailService = ResendEmailService;
