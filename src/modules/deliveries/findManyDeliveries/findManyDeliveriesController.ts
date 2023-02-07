import { Request, Response } from "express";
import { FindManyDeliveries } from "./findManyDeliveries";

export class FindManyDeliveriesController {
    async handle(req: Request, res: Response) {

        const findManyDeliveries = new FindManyDeliveries();

        const result = await findManyDeliveries.execute();

        return res.json(result)
    } 
}