import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticatedClient(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Expired token!',
        });
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub } = verify(token, 'ad12afc2c09fa6224c4e3e40762a74b3') as IPayLoad
        request.id_client = sub

        return next();
    } catch (error) {
        return res.status(401).json({
            message: 'invalid token!',
        });
    }
}