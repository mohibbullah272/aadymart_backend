import { Request, Response, NextFunction } from 'express';

/**
 * Async error handler wrapper
 */
const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
