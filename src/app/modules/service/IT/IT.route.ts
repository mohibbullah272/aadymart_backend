import { Router } from "express";
import CheckAdmin from "../../../middlewares/CheckAdmin";
import ITController from "./IT.controller";

const ITRoute = Router();

ITRoute.post('/',CheckAdmin,  ITController.create);
ITRoute.get('/', ITController.getAll);
ITRoute.get('/:id', ITController.getById);
ITRoute.put('/:id',CheckAdmin, ITController.update);
ITRoute.delete('/:id',CheckAdmin, ITController.delete);

export default ITRoute;