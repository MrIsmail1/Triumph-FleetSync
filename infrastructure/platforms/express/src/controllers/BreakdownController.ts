import { BreakdownRepository } from "../../../../../application/repositories/BreakdownRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { BreakdownCreateUsecase } from "../../../../../application/usecases/breakdown/BreakdownCreateUsecase";
import { BreakdownDeleteUsecase } from "../../../../../application/usecases/breakdown/BreakdownDeleteUsecase";
import { BreakdownUpdateUsecase } from "../../../../../application/usecases/breakdown/BreakdownUpdateUsecase";
import { BreakdownsListUsecase } from "../../../../../application/usecases/breakdown/BreakdownsListUsecase";
import { OK, CREATED } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { ValidString } from "../../../../../domain/types/ValidString";
import { AccessTokenPayload } from "../utils/jwt";

export class BreakdownController {
  public constructor(
    private readonly breakdownRepository: BreakdownRepository,
    private readonly userRepository: UserRepository
  ) {}

  /**
   * ✅ Ajouter une panne
   */
  addBreakdownHandler = catchErrors(async (request, response) => {
    const { description, actionTaken, resolved, resolutionDate } = request.body;
    const currentUser = request.user as AccessTokenPayload;

    const descriptionOrError = ValidString.from(description);
    const actionTakenOrError = ValidString.from(actionTaken);

    appAssert(
      !(descriptionOrError instanceof Error),
      ...mapDomainErrorToHttp(descriptionOrError as Error)
    );

    appAssert(
      !(actionTakenOrError instanceof Error),
      ...mapDomainErrorToHttp(actionTakenOrError as Error)
    );

    const breakdownCreateUsecase = new BreakdownCreateUsecase(this.breakdownRepository);

    const breakdownOrError = await breakdownCreateUsecase.execute(
      request.body.motorbikeId,
      descriptionOrError.value,
      actionTakenOrError.value,
      currentUser.userIdentifier,
      currentUser.role,
      resolved
    );

    appAssert(
      !(breakdownOrError instanceof Error),
      ...mapDomainErrorToHttp(breakdownOrError as Error)
    );

    response.status(CREATED).json({
      message: "Breakdown added successfully",
      breakdown: breakdownOrError,
    });
  });

  listBreakdownsHandler = catchErrors(async (request, response) => {
    const breakdownId = request.params.id;
    const currentUser = request.user as AccessTokenPayload;

    const breakdownsListUsecase = new BreakdownsListUsecase(
      this.breakdownRepository,
      this.userRepository
    );

    const breakdownsOrError = await breakdownsListUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      breakdownId
    );

    appAssert(
      !(breakdownsOrError instanceof Error),
      ...mapDomainErrorToHttp(breakdownsOrError as Error)
    );

    response.status(OK).json(breakdownsOrError);
  });

  deleteBreakdownHandler = catchErrors(async (request, response) => {
    const breakdownId = request.params.id;
    const currentUser = request.user as AccessTokenPayload;

    const breakdownDeleteUsecase = new BreakdownDeleteUsecase(this.breakdownRepository);

    const breakdownDeletedOrError = await breakdownDeleteUsecase.execute(
      breakdownId,
      currentUser.userIdentifier,
      currentUser.role
    );

    appAssert(
      !(breakdownDeletedOrError instanceof Error),
      ...mapDomainErrorToHttp(breakdownDeletedOrError as Error)
    );

    response.status(OK).json({
      message: "Breakdown deleted successfully",
    });
  });

  updateBreakdownHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const breakdownId = request.params.id;
    const { description, actionTaken, resolved, resolutionDate } = request.body;

    if (!breakdownId) {
      return response.status(400).json({ message: "L'identifiant de la panne est requis." });
    }

    const descriptionOrError = description ? ValidString.from(description) : null;
    const actionTakenOrError = actionTaken ? ValidString.from(actionTaken) : null;

    appAssert(
      !(descriptionOrError instanceof Error),
      ...mapDomainErrorToHttp(descriptionOrError as Error)
    );

    appAssert(
      !(actionTakenOrError instanceof Error),
      ...mapDomainErrorToHttp(actionTakenOrError as Error)
    );

    const breakdownUpdateUsecase = new BreakdownUpdateUsecase(this.breakdownRepository);

    const breakdownOrError = await breakdownUpdateUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      breakdownId,
      {
        description: descriptionOrError?.value,
        actionTaken: actionTakenOrError?.value,
        resolved,
        resolutionDate: resolutionDate ? new Date(resolutionDate).toISOString() : undefined,
      }
    );

    appAssert(
      !(breakdownOrError instanceof Error),
      ...mapDomainErrorToHttp(breakdownOrError as Error)
    );

    response.status(OK).json({
      message: "Breakdown updated successfully",
      breakdown: breakdownOrError,
    });
  });
}
