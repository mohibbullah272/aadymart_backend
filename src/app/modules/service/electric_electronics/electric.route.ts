import { Router } from "express";
import electricController from "./electric.controller";
import CheckAdmin from "../../../middlewares/CheckAdmin";




const ElectricRouter = Router();

ElectricRouter.post('/',CheckAdmin,  electricController.create);
ElectricRouter.get('/', electricController.getAll);
ElectricRouter.get('/:id', electricController.getById);
ElectricRouter.put('/:id', CheckAdmin, electricController.update);
ElectricRouter.delete('/:id',CheckAdmin, electricController.delete);

export default ElectricRouter;