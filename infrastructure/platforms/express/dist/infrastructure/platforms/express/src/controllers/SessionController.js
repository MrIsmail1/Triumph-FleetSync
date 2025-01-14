"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const zod_1 = require("zod");
const SessionsListUsecase_1 = require("../../../../../application/usecases/auth/SessionsListUsecase");
const http_1 = require("../constants/http");
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const errorsMapper_1 = require("../utils/errorsMapper");
class SessionController {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
        this.listSessionsHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const sessionsListUseCase = new SessionsListUsecase_1.SessionListUseCase(this.sessionRepository);
            const sessionsOrError = await sessionsListUseCase.execute(currentUser.userIdentifier);
            (0, appAssert_1.default)(!(sessionsOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(sessionsOrError));
            return response.status(http_1.OK).json(sessionsOrError.map((session) => ({
                ...session,
                ...(session.identifier === currentUser.sessionIdentifier && {
                    current: true,
                }),
            })));
        });
        this.deleteSessionHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const sessionIdentifier = zod_1.z.string().parse(request.params.id);
            const deleted = await this.sessionRepository.deleteUserSession(sessionIdentifier, currentUser.userIdentifier);
            (0, appAssert_1.default)(deleted != false, http_1.NOT_FOUND, "SessionNotFoundError", "Session not found");
            return response.status(http_1.OK).json({
                message: "Session deleted",
            });
        });
    }
}
exports.SessionController = SessionController;
