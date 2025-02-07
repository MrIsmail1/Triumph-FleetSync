import { OK } from "@/constants/http.ts";
import { partPurchaseSchema } from "@/schemas/PartPurchaseSchema.ts";
import appAssert from "@/utils/appAssert.ts";
import { mapDomainErrorToHttp } from "@/utils/errorsMapper.ts";
import { Context } from "hono";
import { PartPurchaseCreateUsecase } from "../../../../application/usecases/partPurchase/PartPurchaseCreateUsecase.ts";
import { PartPurchaseRepository } from "./../../../../application/repositories/PartPurchaseRepository.ts";
import { SparePartRepository } from "./../../../../application/repositories/SparePartRepository.ts";
import { PartPurchaseListUsecase } from "./../../../../application/usecases/partPurchase/PartPurchaseListUsecase.ts";
import { PartPurchaseReceiveOrCancelUsecase } from "./../../../../application/usecases/partPurchase/PartPurchaseReceiveOrCancelUsecase.ts";

export class PartPurchaseController {
  public constructor(
    private partPurchaseRepository: PartPurchaseRepository,
    private sparePartRepository: SparePartRepository
  ) {}

  listPartPurchasesHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const sparePartPurchaseUseCase = new PartPurchaseListUsecase(
      this.partPurchaseRepository
    );
    const purchasesOrError = await sparePartPurchaseUseCase.execute(
      currentUserRole
    );

    appAssert(
      !(purchasesOrError instanceof Error),
      ...mapDomainErrorToHttp(purchasesOrError as Error)
    );

    return c.json(purchasesOrError, OK);
  };
  createPartPurchaseHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const rawBody = await c.req.json();

    const validatePurchase = partPurchaseSchema.parse(rawBody);
    const sparePartPurchaseUseCase = new PartPurchaseCreateUsecase(
      this.partPurchaseRepository,
      this.sparePartRepository
    );
    const purchaseOrError = await sparePartPurchaseUseCase.execute(
      currentUserRole,
      validatePurchase
    );

    appAssert(
      !(purchaseOrError instanceof Error),
      ...mapDomainErrorToHttp(purchaseOrError as Error)
    );

    return c.json(purchaseOrError, OK);
  };

  updatePartPurchaseStatusHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const partPurchaseId = c.req.param("id");
    const rawBody = await c.req.json();

    const validatePartPurchase = partPurchaseSchema
      .pick({
        status: true,
        receivedDate: true,
      })
      .parse(rawBody);
    const sparePartPurchaseUseCase = new PartPurchaseReceiveOrCancelUsecase(
      this.partPurchaseRepository,
      this.sparePartRepository
    );
    const purchaseOrError = await sparePartPurchaseUseCase.execute(
      currentUserRole,
      partPurchaseId,
      validatePartPurchase.status,
      validatePartPurchase.receivedDate || undefined
    );

    appAssert(
      !(purchaseOrError instanceof Error),
      ...mapDomainErrorToHttp(purchaseOrError as Error)
    );

    return c.json(purchaseOrError, OK);
  };
}
