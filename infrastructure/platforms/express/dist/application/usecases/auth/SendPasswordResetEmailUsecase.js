"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendPasswordResetEmailUsecase = void 0;
class SendPasswordResetEmailUsecase {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async execute({ to, subject, text, html }) {
        const emailSentOrError = await this.mailService.send({
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
        return emailSentOrError;
    }
}
exports.SendPasswordResetEmailUsecase = SendPasswordResetEmailUsecase;
