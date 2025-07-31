import { Router } from 'express';
import { register, login, getMe } from './auth.controller';
import { protect } from '../../middlewares/authHook';
import { body } from 'express-validator';
import { handleValidationErrors } from '../../middlewares/validation';

const authRoutes = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
authRoutes.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters')
  ],
  handleValidationErrors,
  register
);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
authRoutes.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  handleValidationErrors,
  login
);

/**
 * @route   GET /api/auth/me
 * @desc    Get current logged in user
 * @access  Private
 */
authRoutes.get('/me', protect, getMe);

export default authRoutes;
