import { Router } from "express";
import webController from "./web.controller";
import CheckAdmin from '../../../middlewares/CheckAdmin';

const WebRouter = Router();

WebRouter.post('/', CheckAdmin, webController.create);
WebRouter.get('/', webController.getAll);
WebRouter.get('/:id', webController.getById);
WebRouter.put('/:id', CheckAdmin, webController.update);
WebRouter.delete('/:id',CheckAdmin, webController.delete);

export default WebRouter;