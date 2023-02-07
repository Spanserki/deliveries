import { prisma } from "../../../lib/prismaClient";

interface ICreateDelivery {
    item_name: string;
    id_client: string;
    id_deliveryman: string;
}

export class CreateDeliveries {
    async execute({ id_client, item_name, id_deliveryman }: ICreateDelivery) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client,
                id_deliveryman,
            }
        })
        return delivery;
    }
}