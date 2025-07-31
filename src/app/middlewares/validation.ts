import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import AppError from './appError';

/**
 * Middleware to handle validation errors
 */
export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessage = errors.array().map((error: { msg: any; }) => `${error.msg}`).join(', ');
    return next(new AppError(errorMessage, 400));
  }
  
  next();
};


