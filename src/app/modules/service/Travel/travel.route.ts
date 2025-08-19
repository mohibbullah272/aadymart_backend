import { Router } from 'express';
import travelController from './travel.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';


const TravelRoute = Router();

TravelRoute.post('/', CheckAdmin, travelController.create);
TravelRoute.get('/', travelController.getAll);
TravelRoute.get('/:id', travelController.getById);
TravelRoute.put('/:id', CheckAdmin, travelController.update);
TravelRoute.delete('/:id',CheckAdmin, travelController.delete);

export default TravelRoute;