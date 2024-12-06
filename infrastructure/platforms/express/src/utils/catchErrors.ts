import { NextFunction, Request, Response } from "express";

type AyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;
const catchErrors = (controller: AyncController): AyncController => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
export default catchErrors;
