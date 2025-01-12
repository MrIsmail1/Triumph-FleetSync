import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { UserShowProfileUsecase } from "../../../../../application/usecases/user/UserShowProfileUsecase";
import { UsersListUsecase } from "../../../../../application/usecases/user/UsersListUsecase";
import { UserUpdateProfileUsecase } from "../../../../../application/usecases/user/UserUpdateProfileUsecase";
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

  updateUserProfileHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const dataToUpdate = request.body;
    const userUpdateProfileUsecase = new UserUpdateProfileUsecase(
      this.userRepository
    );
    const userOrError = await userUpdateProfileUsecase.execute(
      dataToUpdate.userIdentifier ?? currentUser.userIdentifier,
      currentUser.role,
      dataToUpdate
    );

    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    response.status(OK).json(userOrError);
  });
}
