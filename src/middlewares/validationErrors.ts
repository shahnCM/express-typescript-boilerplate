import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import {ValidationError} from "../errors/ValidationError"

export function catchValidationErrors(req: Request, res: Response, next: NextFunction): any {
    const errors = validationResult(req);

    if (errors.array().length === 0) {
      return next()
    }

    return next(new ValidationError('Validation Error', errors.array()))
}

