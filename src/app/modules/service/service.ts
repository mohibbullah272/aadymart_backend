import { Request } from 'express';

import { IService, IServiceInput, IServiceUpdateInput, IServiceQuery } from './service.interface';
import ApiFeatures from '../../middlewares/apiFeature';
import Service from './service.model';

class ServiceService {
  /**
   * Create a new service
   */
  async createService(serviceData: IServiceInput): Promise<IService> {
    const service = await Service.create(serviceData);
    return service;
  }

  /**
   * Get all services with filtering, sorting, and pagination
   */
  async getAllServices(query: IServiceQuery): Promise<{ services: IService[]; count: number; pagination: any }> {
    const features = new ApiFeatures(Service.find(), query).sort()

    const services = await features.query;
    const count = await Service.countDocuments();

    return {
      services,
      count,
      pagination: features.pagination
    };
  }

  /**
   * Get a single service by ID
   */
  async getServiceById(id: string): Promise<IService | null> {
    const service = await Service.findById(id);
    return service;
  }

  /**
   * Update a service by ID
   */
  async updateService(id: string, updateData: IServiceUpdateInput): Promise<IService | null> {
    const service = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    return service;
  }

  /**
   * Delete a service by ID
   */
  async deleteService(id: string): Promise<IService | null> {
    const service = await Service.findByIdAndDelete(id);
    return service;
  }

  /**
   * Get services by category
   */
  async getServicesByCategory(category: string): Promise<IService[]> {
    const services = await Service.find({ category, isActive: true });
    return services;
  }
}

export default new ServiceService();

