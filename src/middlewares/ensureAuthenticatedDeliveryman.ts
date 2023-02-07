import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticatedDeliveryman(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'unregistered user',
        });
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub } = verify(token, '98d7fc1c47596c741f869d874ee37980') as IPayLoad
        request.id_deliveryman = sub

        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'Expired token!',
        });
    }
}