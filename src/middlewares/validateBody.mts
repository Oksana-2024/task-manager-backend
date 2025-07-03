import createHttpError from "http-errors";
import { Request, NextFunction } from "express";
import { Schema, ValidationError } from "joi";

export const validateBody =
  (schema: Schema) => async (req: Request, _, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (err) {
      const errors = (err as ValidationError).details.map(
        (detail) => detail.message
      );
      next(createHttpError.BadRequest(errors as never));
    }
  };