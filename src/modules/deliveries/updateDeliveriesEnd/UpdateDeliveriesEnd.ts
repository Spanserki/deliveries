import { prisma } from "../../../lib/prismaClient";

interface updateDeliveriesEnd {
    id_deliverie: string;
}

export class UpdateDeliveriesEnd {
    async execute({ id_deliverie }: updateDeliveriesEnd) {

        const updateDeliveries = await prisma.deliveries.update({
            where: {
                id: id_deliverie
            },
            data: {
                end_at: new Date()
            }
        })
        return updateDeliveries;
    }
}