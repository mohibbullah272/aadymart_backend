import { Router } from 'express';
import travelController from './travel.controller';



const TravelRoute = Router();

TravelRoute.post('/',  travelController.create);
TravelRoute.get('/', travelController.getAll);
TravelRoute.get('/:id', travelController.getById);
TravelRoute.put('/:id',  travelController.update);
TravelRoute.delete('/:id', travelController.delete);

export default TravelRoute;