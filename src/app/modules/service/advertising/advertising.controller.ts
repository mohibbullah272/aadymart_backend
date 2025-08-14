import { NextFunction, Request,Response } from "express";
import AdService from './advertising.service'

import ApiResponse from "../../../utils/ApiResponse";
import { IAdd } from "./advertising.interface";


class AdController {
    // Create Event
    async create(req: Request, res: Response, next: NextFunction) {
      try {
        const webData: IAdd = req.body;
        const event = await AdService.create(webData);
        ApiResponse.success(res, event, 201, 'new service created successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get All Events
    async getAll(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await AdService.findAll();
        ApiResponse.success(res,event, 200, 'web services fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get Single Event
    async getById(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await AdService.findById(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, 'web service not found');
        }
        ApiResponse.success(res, event, 200, 'web service fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Update Event
    async update(req: Request, res: Response, next: NextFunction) {
      try {
        
        const event = await AdService.update(req.params.id, req.body);
        if (!event) {
          return ApiResponse.notFound(res, 'web service not found');
        }
        ApiResponse.success(res, event, 200, 'web service updated successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Delete Event
    async delete(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await AdService.delete(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, 'web service not found');
        }
        ApiResponse.success(res, null, 200, 'web service deleted successfully');
      } catch (error) {
        next(error);
      }
    }
  }
  export default new AdController