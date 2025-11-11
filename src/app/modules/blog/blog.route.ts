import { Router } from 'express';
import CheckAdmin from '../../middlewares/CheckAdmin';
import blogController from './blog.controller';




const BlogRoute = Router();

BlogRoute.post('/',CheckAdmin,  blogController.create);
BlogRoute.get('/', blogController.getAll);
BlogRoute.get('/:id', blogController.getById);
BlogRoute.put('/:id',CheckAdmin,  blogController.update);
BlogRoute.delete('/:id', blogController.delete);

export default BlogRoute;