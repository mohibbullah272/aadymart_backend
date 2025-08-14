import { NextFunction, Request,Response } from "express";


import ApiResponse from "../../../utils/ApiResponse";
import { IElectric } from "./electric.interface";
import electricService from "./electric.service";



class ElectricController {
    // Create Event
    async create(req: Request, res: Response, next: NextFunction) {
      try {
        const webData: IElectric = req.body;
        const event = await electricService.create(webData);
        ApiResponse.success(res, event, 201, 'new service created successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get All Events
    async getAll(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await electricService.findAll();
        ApiResponse.success(res,event, 200, 'services fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get Single Event
    async getById(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await electricService.findById(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, ' service not found');
        }
        ApiResponse.success(res, event, 200, 'service fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Update Event
    async update(req: Request, res: Response, next: NextFunction) {
      try {
          console.log(req)
        const event = await electricService.update(req.params.id, req.body);
        if (!event) {
          return ApiResponse.notFound(res, ' service not found');
        }
        ApiResponse.success(res, event, 200, 'service updated successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Delete Event
    async delete(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await electricService.delete(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, ' service not found');
        }
        ApiResponse.success(res, null, 200, ' service deleted successfully');
      } catch (error) {
        next(error);
      }
    }
  }
  export default new ElectricController