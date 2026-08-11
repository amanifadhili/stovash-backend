import { Injectable } from '@nestjs/common';
import { prisma } from '../database/client.js';

@Injectable()
export class PurchasesReport {
  async getPurchasesReport(tenantId: string, shopId: string, startDate: string, endDate: string) {
    const purchases = await prisma.purchaseOrder.findMany({
      where: {
        tenantId,
        shopId,
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        }
      },
      include: {
        items: true,
        supplier: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const totalCost = purchases.reduce((sum, po) => sum + po.totalCost, 0);

    return {
      purchases,
      summary: {
        totalOrders: purchases.length,
        totalCost,
        averageOrderValue: purchases.length > 0 ? totalCost / purchases.length : 0
      }
    };
  }
}
