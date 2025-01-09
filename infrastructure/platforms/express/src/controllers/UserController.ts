import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { UserShowProfileUsecase } from "../../../../../application/usecases/UserShowProfileUsecase";
import { UsersListUsecase } from "../../../../../application/usecases/UsersListUsecase";
import { OK } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";

export class UserController {
  public constructor(private readonly userRepository: UserRepository) {}
  showProfileHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const userProfileShowUseCase = new UserShowProfileUsecase(
      this.userRepository
    );
    const userOrError = await userProfileShowUseCase.execute(
      currentUser.userIdentifier
    );

    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    response.status(OK).json(userOrError);
  });
  listUsersHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const usersListUseCase = new UsersListUsecase(this.userRepository);

    const usersOrError = await usersListUseCase.execute(
      currentUser.userIdentifier
    );
    appAssert(
      !(usersOrError instanceof Error),
      ...mapDomainErrorToHttp(usersOrError as Error)
    );
    response.status(OK).json(usersOrError);
  });
}
