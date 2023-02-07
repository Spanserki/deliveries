import { Request, Response } from "express";
import { AuthenticateClient } from "./AuthenticateClient";

export class AuthenticatedClientController {
    async handle(req: Request, res: Response) {

        const {username, password} = req.body

        const authenticateClient = new AuthenticateClient();

        const result = await authenticateClient.execute({
            username,
            password
        });

        return res.json(result)
    } 
}