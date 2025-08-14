import { NextFunction, Request,Response } from "express";


import ApiResponse from "../../../utils/ApiResponse";
import { IArch } from "./Arch.interface";
import archService from "./arch.service";


class ArchController {
    // Create Event
    async create(req: Request, res: Response, next: NextFunction) {
      try {
        const webData: IArch = req.body;
        const event = await archService.create(webData);
        ApiResponse.success(res, event, 201, 'new service created successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get All Events
    async getAll(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await archService.findAll();
        ApiResponse.success(res,event, 200, 'services fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get Single Event
    async getById(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await archService.findById(req.params.id);
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
        const event = await archService.update(req.params.id, req.body);
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
        const event = await archService.delete(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, ' service not found');
        }
        ApiResponse.success(res, null, 200, ' service deleted successfully');
      } catch (error) {
        next(error);
      }
    }
  }
  export default new ArchController