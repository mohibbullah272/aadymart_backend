import { Router } from "express";
import electricController from "./electric.controller";




const ElectricRouter = Router();

ElectricRouter.post('/',  electricController.create);
ElectricRouter.get('/', electricController.getAll);
ElectricRouter.get('/:id', electricController.getById);
ElectricRouter.put('/:id',  electricController.update);
ElectricRouter.delete('/:id', electricController.delete);

export default ElectricRouter;