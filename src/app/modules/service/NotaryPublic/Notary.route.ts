import { Router } from 'express';
import NotaryController from './Notary.controller';



const NotaryRoute = Router();

NotaryRoute.post('/',  NotaryController.create);
NotaryRoute.get('/', NotaryController.getAll);
NotaryRoute.get('/:id', NotaryController.getById);
NotaryRoute.put('/:id',  NotaryController.update);
NotaryRoute.delete('/:id', NotaryController.delete);

export default NotaryRoute;