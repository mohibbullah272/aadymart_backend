import { Router } from 'express';
import CheckAdmin from '../../../middlewares/CheckAdmin';
import hotelController from './hotel.controller';




const hotelRoute = Router();

hotelRoute.post('/',CheckAdmin,  hotelController.create);
hotelRoute.get('/', hotelController.getAll);
hotelRoute.get('/:id', hotelController.getById);
hotelRoute.put('/:id',CheckAdmin,  hotelController.update);
hotelRoute.delete('/:id',CheckAdmin, hotelController.delete);

export default hotelRoute;