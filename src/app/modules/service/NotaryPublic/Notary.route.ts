import { Router } from 'express';
import NotaryController from './Notary.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';



const NotaryRoute = Router();

NotaryRoute.post('/',CheckAdmin,  NotaryController.create);
NotaryRoute.get('/', NotaryController.getAll);
NotaryRoute.get('/:id', NotaryController.getById);
NotaryRoute.put('/:id', CheckAdmin, NotaryController.update);
NotaryRoute.delete('/:id',CheckAdmin, NotaryController.delete);

export default NotaryRoute;