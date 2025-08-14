import { Router } from 'express';
import officeController from './office.controller';



const officeRoute = Router();

officeRoute.post('/',  officeController.create);
officeRoute.get('/', officeController.getAll);
officeRoute.get('/:id', officeController.getById);
officeRoute.put('/:id',  officeController.update);
officeRoute.delete('/:id', officeController.delete);

export default officeRoute;