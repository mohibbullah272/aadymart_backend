import { Router } from 'express';
import consultancyController from './consultancy.controller';



const ConsultancyRoute = Router();

ConsultancyRoute.post('/',  consultancyController.create);
ConsultancyRoute.get('/', consultancyController.getAll);
ConsultancyRoute.get('/:id', consultancyController.getById);
ConsultancyRoute.put('/:id',  consultancyController.update);
ConsultancyRoute.delete('/:id', consultancyController.delete);

export default ConsultancyRoute;