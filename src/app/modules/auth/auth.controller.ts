import { Request, Response, NextFunction } from 'express';
import authService from './auth';
import { ILoginInput, IRegisterInput } from './auth.interface';
import catchAsync from '../../utils/catchAsync';

/**
 * Register a new user
 */
export const register = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const userData: IRegisterInput = req.body;
  
  const result = await authService.register(userData);
  
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message
    });
  }
  
  res.status(201).json({
    success: true,
    token: result.token,
    user: result.user
  });
});

/**
 * Login user
 */
export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const loginData: ILoginInput = req.body;
  
  const result = await authService.login(loginData);
  
  if (!result.success) {
    return res.status(401).json({
      success: false,
      message: result.message
    });
  }
  
  res.status(200).json({
    success: true,
    token: result.token,
    user: result.user
  });
});

/**
 * Get current logged in user
 */
export const getMe = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  const user = req.user;
  
  res.status(200).json({
    success: true,
    data: user
  });
});

