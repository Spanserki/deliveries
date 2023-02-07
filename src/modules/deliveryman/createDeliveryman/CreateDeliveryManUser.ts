import { hash } from "bcrypt";
import { prisma } from "../../../lib/prismaClient";

interface ICreateDeliveryMan {
    username: string;
    password: string;
}

export class CreateDeliverymanUser {
    async execute({username, password}: ICreateDeliveryMan) {
         //Validar se o usuário existe
         const clientExist = await prisma.deliveryman.findFirst({
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
        const client = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client
    }
}