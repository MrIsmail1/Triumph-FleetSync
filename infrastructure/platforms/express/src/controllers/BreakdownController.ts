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

export class BreakdownController {
  public constructor(
    private readonly breakdownRepository: BreakdownRepository,
    private readonly userRepository: UserRepository
  ) {}

  addBreakdownHandler = catchErrors(async (request, response) => {
    const { description } = request.body;
    const currentUser = request.user;

    const descriptionOrError = ValidString.from(description);

    appAssert(
      !(descriptionOrError instanceof Error),
      ...mapDomainErrorToHttp(descriptionOrError as Error)
    );

    const breakdownCreateUsecase = new BreakdownCreateUsecase(this.breakdownRepository);

    const breakdownOrError = await breakdownCreateUsecase.execute(
      descriptionOrError.value,
      currentUser.userIdentifier,
      currentUser.role
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
    const { id: breakdownId } = request.params;
    const currentUser = request.user;

    const breakdownsListUsecase = new BreakdownsListUsecase(
      this.breakdownRepository,
      this.userRepository
    );

    const breakdownsOrError = await breakdownsListUsecase.execute(
      currentUser.userIdentifier,
      breakdownId
    );

    appAssert(
      !(breakdownsOrError instanceof Error),
      ...mapDomainErrorToHttp(breakdownsOrError as Error)
    );

    response.status(OK).json(breakdownsOrError);
  });

  deleteBreakdownHandler = catchErrors(async (request, response) => {
    const { id: breakdownId } = request.params;
    const currentUser = request.user;

    const breakdownDeleteUsecase = new BreakdownDeleteUsecase(this.breakdownRepository);

    const breakdownDeletedOrError = await breakdownDeleteUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      breakdownId
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
    const currentUser = request.user;
    const { id: breakdownId } = request.params;
    const { description } = request.body;

    const descriptionOrError = description ? ValidString.from(description) : null;
    appAssert(
      !(descriptionOrError instanceof Error),
      ...mapDomainErrorToHttp(descriptionOrError as Error)
    );

    const breakdownUpdateUsecase = new BreakdownUpdateUsecase(this.breakdownRepository);

    const breakdownOrError = await breakdownUpdateUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      breakdownId,
      { description: descriptionOrError?.value }
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
