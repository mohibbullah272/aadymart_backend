import { Router } from 'express';
import AdController from './advertising.controller'


const AdRoute = Router();

AdRoute.post('/',  AdController.create);
AdRoute.get('/', AdController.getAll);
AdRoute.get('/:id', AdController.getById);
AdRoute.put('/:id',  AdController.update);
AdRoute.delete('/:id', AdController.delete);

export default AdRoute;