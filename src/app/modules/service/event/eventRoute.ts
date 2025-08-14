import { Router } from 'express';
import EventController from './event.controller';


const EventRouter = Router();

EventRouter.post('/',  EventController.create);
EventRouter.get('/', EventController.getAll);
EventRouter.get('/:id', EventController.getById);
EventRouter.put('/:id',  EventController.update);
EventRouter.delete('/:id', EventController.delete);

export default EventRouter;