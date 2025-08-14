import { Router } from 'express';
import CarController from './car.controller';



const TravelRoute = Router();

TravelRoute.post('/',  CarController.create);
TravelRoute.get('/', CarController.getAll);
TravelRoute.get('/:id', CarController.getById);
TravelRoute.put('/:id',  CarController.update);
TravelRoute.delete('/:id', CarController.delete);

export default TravelRoute;