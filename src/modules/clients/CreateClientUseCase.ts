import { hash } from "bcrypt";
import { prisma } from "../../lib/prismaClient";

interface IcreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {

    async execute({password, username} : IcreateClient) {

        //Validar se o usuário existe
        const clientExist = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (clientExist) {
            throw new Error('Client already exists')
        }

        //Criptografar senha
        const hashPassword = await hash(password, 10);

        //Salvar cliente
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client
    }
}