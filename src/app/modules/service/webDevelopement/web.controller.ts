import { NextFunction, Request,Response } from "express";
import { IWeb } from "./web.interface";

import ApiResponse from "../../../utils/ApiResponse";
import webService from "./web.service";

class WebController {
    // Create Event
    async create(req: Request, res: Response, next: NextFunction) {
      try {
        const webData: IWeb = req.body;
        const event = await webService.create(webData);
        ApiResponse.success(res, event, 201, 'new service created successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get All Events
    async getAll(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await webService.findAll();
        ApiResponse.success(res,event, 200, 'web services fetched successfully');
      } catch (error) {
        next(error);
      }
    }
  
    // Get Single Event
    async getById(req: Request, res: Response, next: NextFunction) {
      try {
        const event = await webService.findById(req.params.id);
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
          console.log(req)
        const event = await webService.update(req.params.id, req.body);
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
        const event = await webService.delete(req.params.id);
        if (!event) {
          return ApiResponse.notFound(res, 'web service not found');
        }
        ApiResponse.success(res, null, 200, 'web service deleted successfully');
      } catch (error) {
        next(error);
      }
    }
  }
  export default new WebController