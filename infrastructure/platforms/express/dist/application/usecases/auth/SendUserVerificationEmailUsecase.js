"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendUserVerificationEmailUsecase = void 0;
const VerificationEmailUnsentError_1 = require("../../../domain/errors/VerificationEmailUnsentError");
class SendUserVerificationEmailUsecase {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async execute({ to, subject, text, html, }) {
        const emailSentOrError = await this.mailService.send({
            to,
            subject,
            text,
            html,
        });
        if (emailSentOrError instanceof Error) {
            return new VerificationEmailUnsentError_1.VerificationEmailUnsentError();
        }
        return true;
    }
}
exports.SendUserVerificationEmailUsecase = SendUserVerificationEmailUsecase;
