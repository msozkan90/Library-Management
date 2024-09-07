import { Request, Response, NextFunction } from "express";
import  AppError from "../utils/appError";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    status,
    message,
  });
};

export default errorHandler;