import { Request, Response } from "express";
import { AuthenticateDeliveryman } from "./AuthenticateDelivery";

export class AuthenticateDeliverymanController {
    async handle(req: Request, res: Response) {

        const {username, password} = req.body

        const authenticateClient = new AuthenticateDeliveryman();

        const result = await authenticateClient.execute({
            username,
            password
        });

        return res.json(result)
    } 
}