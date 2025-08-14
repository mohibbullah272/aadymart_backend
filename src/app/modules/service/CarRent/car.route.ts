import { Router } from 'express';
import CarController from './car.controller';



const CarRoute = Router();

CarRoute.post('/',  CarController.create);
CarRoute.get('/', CarController.getAll);
CarRoute.get('/:id', CarController.getById);
CarRoute.put('/:id',  CarController.update);
CarRoute.delete('/:id', CarController.delete);

export default CarRoute;