import { Request, Response, NextFunction } from 'express';
import ApiResponse from '../utils/ApiResponse';

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return ApiResponse.error(res, 'Validation Error', 400, err.message);
  }

  if (err.name === 'CastError') {
    return ApiResponse.notFound(res, 'Invalid ID format');
  }

  ApiResponse.error(res, err.message);
};

export default errorMiddleware;