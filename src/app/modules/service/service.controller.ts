import { Request, Response, NextFunction } from 'express';
import serviceService from './service';
import { IServiceInput, IServiceUpdateInput, IServiceQuery } from './service.interface';
import catchAsync from '../../utils/catchAsync';
import AppError from "../../middlewares/appError";

/**
 * Create a new service
 */
export const createService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const serviceData: IServiceInput = req.body;
  
  const service = await serviceService.createService(serviceData);
  
  res.status(201).json({
    success: true,
    data: service
  });
});

/**
 * Get all services
 */
export const getAllServices = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const query: IServiceQuery = req.query;
  
  const result = await serviceService.getAllServices(query);
  
  res.status(200).json({
    success: true,
    count: result.count,
    pagination: result.pagination,
    data: result.services
  });
});

/**
 * Get a single service by ID
 */
export const getServiceById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  const service = await serviceService.getServiceById(id);
  
  if (!service) {
    return next(new AppError('Service not found', 404));
  }
  
  res.status(200).json({
    success: true,
    data: service
  });
});

/**
 * Update a service
 */
export const updateService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const updateData: IServiceUpdateInput = req.body;
  
  const service = await serviceService.updateService(id, updateData);
  
  if (!service) {
    return next(new AppError('Service not found', 404));
  }
  
  res.status(200).json({
    success: true,
    data: service
  });
});

/**
 * Delete a service
 */
export const deleteService = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  const service = await serviceService.deleteService(id);
  
  if (!service) {
    return next(new AppError('Service not found', 404));
  }
  
  res.status(200).json({
    success: true,
    message: 'Service deleted successfully'
  });
});

/**
 * Get services by category
 */
export const getServicesByCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { category } = req.params;
  
  const services = await serviceService.getServicesByCategory(category);
  
  res.status(200).json({
    success: true,
    count: services.length,
    data: services
  });
});

