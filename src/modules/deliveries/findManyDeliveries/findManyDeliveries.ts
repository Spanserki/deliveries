import { prisma } from "../../../lib/prismaClient";

export class FindManyDeliveries {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        })
        return deliveries;
    }
}