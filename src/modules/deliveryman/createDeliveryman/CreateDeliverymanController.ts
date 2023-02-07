import { Request, Response } from "express";
import { CreateDeliverymanUser } from "./CreateDeliveryManUser";

export class CreateDeliverymanController {
    async handle(req: Request, res: Response) {

        const {username, password} = req.body

        const createDeliverymanUser = new CreateDeliverymanUser();

        const result = await createDeliverymanUser.execute({
            username,
            password
        });

        return res.json(result)
    } 
}