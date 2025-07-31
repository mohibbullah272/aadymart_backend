import { Router } from 'express';
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getServicesByCategory
} from '../service/service.controller';
import { protect, authorize } from '../../middlewares/authHook';
import { body } from 'express-validator';
import { handleValidationErrors } from '../../middlewares/validation';

const ServiceRouter = Router();

/**
 * @route   POST /api/services
 * @desc    Create a new service
 * @access  Private/Admin
 */
ServiceRouter.post(
  '/',
  protect,
  authorize('admin'),
  [
    body('name').notEmpty().withMessage('Service name is required'),
    body('description').notEmpty().withMessage('Service description is required'),
    body('category').notEmpty().withMessage('Service category is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('duration').notEmpty().withMessage('Service duration is required')
  ],
  handleValidationErrors,
  createService
);

/**
 * @route   GET /api/services
 * @desc    Get all services
 * @access  Public
 */
ServiceRouter.get('/', getAllServices);

/**
 * @route   GET /api/services/category/:category
 * @desc    Get services by category
 * @access  Public
 */
ServiceRouter.get('/category/:category', getServicesByCategory);

/**
 * @route   GET /api/services/:id
 * @desc    Get a single service by ID
 * @access  Public
 */
ServiceRouter.get('/:id', getServiceById);

/**
 * @route   PUT /api/services/:id
 * @desc    Update a service
 * @access  Private/Admin
 */
ServiceRouter.put(
  '/:id',
  protect,
  authorize('admin'),
  updateService
);

/**
 * @route   DELETE /api/services/:id
 * @desc    Delete a service
 * @access  Private/Admin
 */
ServiceRouter.delete(
  '/:id',
  protect,
  authorize('admin'),
  deleteService
);

export default ServiceRouter;
