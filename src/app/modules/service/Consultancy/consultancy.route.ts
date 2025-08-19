import { Router } from 'express';
import consultancyController from './consultancy.controller';
import CheckAdmin from '../../../middlewares/CheckAdmin';



const ConsultancyRoute = Router();

ConsultancyRoute.post('/',CheckAdmin,  consultancyController.create);
ConsultancyRoute.get('/', consultancyController.getAll);
ConsultancyRoute.get('/:id', consultancyController.getById);
ConsultancyRoute.put('/:id', CheckAdmin, consultancyController.update);
ConsultancyRoute.delete('/:id', CheckAdmin,consultancyController.delete);

export default ConsultancyRoute;