import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../lib/prismaClient";

interface IAuthencticateClient {
    username: string;
    password: string;
}

export class AuthenticateClient {
    async execute({username, password}: IAuthencticateClient) {

        //Receber username e password
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (!client) {
            throw new Error('Username or password invalid!')
        }

        //Verificar se a senha corresponde a do usuário
        //Comparar a senha que ja foi criptografada com a que não foi
        const passwordMatch = await compare(password, client.password)

        if (!passwordMatch) {
            throw new Error('Username or password invalid!')
        }

        //Gerar o token
        const token = sign({username}, 'ad12afc2c09fa6224c4e3e40762a74b3', {
            subject: client.id,
            expiresIn: '1d'
        })

        return token;
    }
}