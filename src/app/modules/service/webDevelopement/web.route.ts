import { Router } from "express";
import webController from "./web.controller";


const WebRouter = Router();

WebRouter.post('/',  webController.create);
WebRouter.get('/', webController.getAll);
WebRouter.get('/:id', webController.getById);
WebRouter.put('/:id',  webController.update);
WebRouter.delete('/:id', webController.delete);

export default WebRouter;