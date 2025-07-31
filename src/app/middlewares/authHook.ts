import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../modules/user/user.model';
import AppError from './appError';

// Extend Express Request type
interface AuthenticatedRequest extends Request {
  user?: any;
}

/**
 * Protect routes - verify JWT token
 */
export const protect = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token;

  // Get token from header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return next(new AppError('Not authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    // Get user from the token
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new AppError('Not authorized to access this route', 401));
  }
};

/**
 * Authorize based on user role
 */
export const authorize = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('Not authorized to access this route', 401));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }

    next();
  };
};
