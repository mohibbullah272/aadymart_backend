import { Router } from "express";
import archController from "./arch.controller";
import CheckAdmin from "../../../middlewares/CheckAdmin";



const ArchRouter = Router();

ArchRouter.post('/',CheckAdmin,  archController.create);
ArchRouter.get('/', archController.getAll);
ArchRouter.get('/:id', archController.getById);
ArchRouter.put('/:id', CheckAdmin, archController.update);
ArchRouter.delete('/:id',CheckAdmin, archController.delete);

export default ArchRouter;