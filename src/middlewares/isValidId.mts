import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

export function isValidId(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  if (!isValidObjectId(id)) {
    throw createHttpError(400, `${id} is not valid id`);
  }

  next();
}
