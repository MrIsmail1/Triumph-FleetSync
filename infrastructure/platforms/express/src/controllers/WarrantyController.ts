import { WarrantyRepository } from "../../../../../application/repositories/WarrantyRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { WarrantyCreateUsecase } from "../../../../../application/usecases/warranty/WarrantyCreateUsecase";
import { WarrantyDeleteUsecase } from "../../../../../application/usecases/warranty/WarrantyDeleteUsecase";
import { WarrantyUpdateUsecase } from "../../../../../application/usecases/warranty/WarrantyUpdateUsecase";
import { WarrantiesListUsecase } from "../../../../../application/usecases/warranty/WarrantiesListUsecase";
import { OK, CREATED } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";

export class WarrantyController {
  public constructor(
    private readonly warrantyRepository: WarrantyRepository,
    private readonly userRepository: UserRepository
  ) {}

  addWarrantyHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;

    const {
      validFrom,
      validUntil,
      providerName,
      warrantyDetails,
      motorbikeId,
    } = request.body;

    const warrantyCreateUsecase = new WarrantyCreateUsecase(this.warrantyRepository);
    const warrantyOrError = await warrantyCreateUsecase.execute(
      new Date(validFrom),
      new Date(validUntil),
      providerName,
      warrantyDetails,
      motorbikeId,
      currentUser.userIdentifier,
      currentUser.role
    );

    appAssert(
      !(warrantyOrError instanceof Error),
      ...mapDomainErrorToHttp(warrantyOrError as Error)
    );

    response.status(CREATED).json({
      message: "Warranty added successfully",
      warranty: warrantyOrError,
    });
  });

 deleteWarrantyHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const warrantyId = request.params.id;

    if (!warrantyId) {
        return response.status(400).json({ message: "L'identifiant de la garantie est requis." });
    }

    const warrantyDeleteUsecase = new WarrantyDeleteUsecase(this.warrantyRepository);
    const warrantyDeletedOrError = await warrantyDeleteUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      warrantyId
    );

    appAssert(
      !(warrantyDeletedOrError instanceof Error),
      ...mapDomainErrorToHttp(warrantyDeletedOrError as Error)
    );

    response.status(OK).json({
      message: "Warranty deleted successfully",
    });
});



  updateWarrantyHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const warrantyId = request.params.id;
    const dataToUpdate = request.body;

    const warrantyUpdateUsecase = new WarrantyUpdateUsecase(this.warrantyRepository);
    const updatedWarrantyOrError = await warrantyUpdateUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      warrantyId,
      dataToUpdate
    );

    appAssert(
      !(updatedWarrantyOrError instanceof Error),
      ...mapDomainErrorToHttp(updatedWarrantyOrError as Error)
    );

    response.status(OK).json({
      message: "Warranty updated successfully.",
      warranty: updatedWarrantyOrError,
    });
  });

  listWarrantiesHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;

    const warrantiesListUsecase = new WarrantiesListUsecase(this.warrantyRepository);
    const warrantiesOrError = await warrantiesListUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role
    );

    appAssert(
      !(warrantiesOrError instanceof Error),
      ...mapDomainErrorToHttp(warrantiesOrError as Error)
    );

    response.status(OK).json(warrantiesOrError);
  });
}
