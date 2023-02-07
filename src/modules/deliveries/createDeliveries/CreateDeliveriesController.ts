import { request, Request, Response } from "express";
import { CreateDeliveries } from "./CreateDeliveries";

export class CreateDeliveriesController {
    async handle(req: Request, res: Response) {

        const {item_name, id_deliveryman} = req.body
        const {id_client} = request

        const createDelivery = new CreateDeliveries();

        const result = await createDelivery.execute({
            id_client, 
            item_name,
            id_deliveryman,
        });

        return res.json(result)
    } 
}