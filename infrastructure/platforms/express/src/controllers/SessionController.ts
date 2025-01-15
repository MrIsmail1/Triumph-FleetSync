import { z } from "zod";
import { SessionRepository } from "../../../../../application/repositories/SessionRepository";
import { SessionListUseCase } from "../../../../../application/usecases/auth/SessionsListUsecase";
import { NOT_FOUND, OK } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";
export class SessionController {
  public constructor(private readonly sessionRepository: SessionRepository) {}

  public listSessionsHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const sessionsListUseCase = new SessionListUseCase(this.sessionRepository);

    const sessionsOrError = await sessionsListUseCase.execute(
      currentUser.userIdentifier
    );

    appAssert(
      !(sessionsOrError instanceof Error),
      ...mapDomainErrorToHttp(sessionsOrError as Error)
    );

    return response.status(OK).json(
      sessionsOrError.map((session) => ({
        ...session,
        ...(session.identifier === currentUser.sessionIdentifier && {
          current: true,
        }),
      }))
    );
  });

  public deleteSessionHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const sessionIdentifier = z.string().parse(request.params.id);
    const deleted = await this.sessionRepository.deleteUserSession(
      sessionIdentifier,
      currentUser.userIdentifier
    );
    appAssert(
      deleted != false,
      NOT_FOUND,
      "SessionNotFoundError",
      "Session not found"
    );
    return response.status(OK).json({
      message: "Session deleted",
    });
  });
}
