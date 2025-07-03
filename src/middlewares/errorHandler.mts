import { HttpError } from "http-errors";
import { Response, Request } from "express";

export const errorHandler = (err: Error, _: Request, res: Response) => {
  
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    data: err.message,
  });
};
