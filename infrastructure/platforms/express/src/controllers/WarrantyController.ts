import { WarrantyRepository } from "../../../../../application/repositories/WarrantyRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { WarrantyCreateUsecase } from "../../../../../application/usecases/warranty/WarrantyCreateUsecase";
import { WarrantyDeleteUsecase } from "../../../../../application/usecases/warranty/WarrantyDeleteUsecase";
import { WarrantiesListUsecase } from "../../../../../application/usecases/warranty/WarrantiesListUsecase";
import { warrantyCreateSchema, warrantyDeleteSchema, warrantiesListSchema } from "../schemas/warrantySchema";
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

    const validatedWarrantyData = warrantyCreateSchema.parse({
      ...request.body,
      userRole: currentUser.role,
    });

    const warrantyCreateUsecase = new WarrantyCreateUsecase(this.warrantyRepository);
    const warrantyOrError = await warrantyCreateUsecase.execute(
      new Date(validatedWarrantyData.validFrom),
      new Date(validatedWarrantyData.validUntil),
      validatedWarrantyData.providerName,
      validatedWarrantyData.warrantyDetails,
      validatedWarrantyData.userRole
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

    const validatedData = warrantyDeleteSchema.parse({
      id: request.params.id,
    });

    const warrantyDeleteUsecase = new WarrantyDeleteUsecase(this.warrantyRepository);
    const warrantyDeletedOrError = await warrantyDeleteUsecase.execute(validatedData.id, currentUser.role);

    appAssert(
      !(warrantyDeletedOrError instanceof Error),
      ...mapDomainErrorToHttp(warrantyDeletedOrError as Error)
    );

    response.status(OK).json({
      message: "Warranty deleted successfully",
    });
  });

  listWarrantiesHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;

    const validatedData = warrantiesListSchema.parse({
      userIdentifier: currentUser.userIdentifier,
      role: currentUser.role,
    });

    const warrantiesListUsecase = new WarrantiesListUsecase(
      this.warrantyRepository,
      this.userRepository
    );
    const warrantiesOrError = await warrantiesListUsecase.execute(
      validatedData.userIdentifier,
      validatedData.role
    );

    appAssert(
      !(warrantiesOrError instanceof Error),
      ...mapDomainErrorToHttp(warrantiesOrError as Error)
    );

    response.status(OK).json(warrantiesOrError);
  });
}
