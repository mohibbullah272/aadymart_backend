import { Request, Response, NextFunction } from 'express';
import EventService from './event.service';
import { IEventCreate } from './event.interface';
import ApiResponse from '../../../utils/ApiResponse';

class EventController {
  // Create Event
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const eventData: IEventCreate = req.body;
      const event = await EventService.create(eventData);
      ApiResponse.success(res, event, 201, 'Event created successfully');
    } catch (error) {
      next(error);
    }
  }

  // Get All Events
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const events = await EventService.findAll();
      ApiResponse.success(res, events, 200, 'Events fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  // Get Single Event
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const event = await EventService.findById(req.params.id);
      if (!event) {
        return ApiResponse.notFound(res, 'Event not found');
      }
      ApiResponse.success(res, event, 200, 'Event fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  // Update Event
  async update(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req)
      const event = await EventService.update(req.params.id, req.body);
      if (!event) {
        return ApiResponse.notFound(res, 'Event not found');
      }
      ApiResponse.success(res, event, 200, 'Event updated successfully');
    } catch (error) {
      next(error);
    }
  }

  // Delete Event
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const event = await EventService.delete(req.params.id);
      if (!event) {
        return ApiResponse.notFound(res, 'Event not found');
      }
      ApiResponse.success(res, null, 200, 'Event deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}

export default new EventController();