import { Router } from "express";
import archController from "./arch.controller";



const ArchRouter = Router();

ArchRouter.post('/',  archController.create);
ArchRouter.get('/', archController.getAll);
ArchRouter.get('/:id', archController.getById);
ArchRouter.put('/:id',  archController.update);
ArchRouter.delete('/:id', archController.delete);

export default ArchRouter;