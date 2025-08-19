import { Router } from 'express';
import EventController from './event.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';


const EventRouter = Router();

EventRouter.post('/', CheckAdmin, EventController.create);
EventRouter.get('/', EventController.getAll);
EventRouter.get('/:id', EventController.getById);
EventRouter.put('/:id', CheckAdmin, EventController.update);
EventRouter.delete('/:id',CheckAdmin, EventController.delete);

export default EventRouter;