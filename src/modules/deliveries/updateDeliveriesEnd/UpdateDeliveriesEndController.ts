import { Request, Response } from "express";
import { UpdateDeliveriesEnd } from "./updateDeliveriesEnd";

export class UpdateDeliveriesController {
    async handle(req: Request, res: Response) {

        const {id_deliverie} = req.body

        const updateDeliveriesEnd = new UpdateDeliveriesEnd();

        const result = await updateDeliveriesEnd.execute({
            id_deliverie
        });

        return res.json(result)
    } 
}