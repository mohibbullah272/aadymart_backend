import { Router } from 'express';
import CarController from './car.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';



const CarRoute = Router();

CarRoute.post('/',CheckAdmin,  CarController.create);
CarRoute.get('/', CarController.getAll);
CarRoute.get('/:id', CarController.getById);
CarRoute.put('/:id',CheckAdmin,  CarController.update);
CarRoute.delete('/:id',CheckAdmin, CarController.delete);

export default CarRoute;