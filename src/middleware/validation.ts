import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import AppError from "../utils/appError";

const validateRequest = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(
      { ...req.body, ...req.params },
      { abortEarly: false }
    );
    if (error) {
      const errors = error.details.map((err) => err.message);
      return next(new AppError(errors.join(", "), 400));
    }
    next();
  };
};

export default validateRequest;
