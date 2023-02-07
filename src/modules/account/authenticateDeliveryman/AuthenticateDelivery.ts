import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../lib/prismaClient";

interface IAuthencticateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliveryman {
    async execute({username, password}: IAuthencticateDeliveryman) {

        //Receber username e password
        const client = await prisma.deliveryman.findFirst({
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
        const token = sign({username}, '98d7fc1c47596c741f869d874ee37980', {
            subject: client.id,
            expiresIn: '1d'
        })

        return token;
    }
}