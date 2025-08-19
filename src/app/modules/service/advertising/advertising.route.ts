import { Router } from 'express';
import AdController from './advertising.controller'
import CheckAdmin from '../../../middlewares/CheckAdmin';


const AdRoute = Router();

AdRoute.post('/',CheckAdmin,  AdController.create);
AdRoute.get('/', AdController.getAll);
AdRoute.get('/:id', AdController.getById);
AdRoute.put('/:id',CheckAdmin, AdController.update);
AdRoute.delete('/:id',CheckAdmin, AdController.delete);

export default AdRoute;