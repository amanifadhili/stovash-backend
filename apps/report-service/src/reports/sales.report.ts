import { Injectable } from '@nestjs/common';
import { prisma } from '../database/client.js';

@Injectable()
export class SalesReport {
  async getSalesReport(tenantId: string, shopId: string, startDate: string, endDate: string) {
    const sales = await prisma.salesOrder.findMany({
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
        customer: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
    const totalProfit = sales.reduce((sum, sale) => sum + (sale.profit || 0), 0);

    return {
      sales,
      summary: {
        totalOrders: sales.length,
        totalRevenue,
        totalProfit,
        averageOrderValue: sales.length > 0 ? totalRevenue / sales.length : 0
      }
    };
  }
}
