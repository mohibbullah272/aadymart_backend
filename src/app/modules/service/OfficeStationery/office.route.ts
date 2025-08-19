import { Router } from 'express';
import officeController from './office.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';


const officeRoute = Router();

officeRoute.post('/',CheckAdmin,  officeController.create);
officeRoute.get('/', officeController.getAll);
officeRoute.get('/:id', officeController.getById);
officeRoute.put('/:id', CheckAdmin, officeController.update);
officeRoute.delete('/:id',CheckAdmin, officeController.delete);

export default officeRoute;