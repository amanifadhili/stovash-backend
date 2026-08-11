import { Injectable } from '@nestjs/common';
import { prisma } from '../database/client.js';

@Injectable()
export class InventoryReport {
  async getInventoryReport(tenantId: string, shopId: string) {
    const items = await prisma.inventoryItem.findMany({
      where: { tenantId, shopId },
      include: { product: true }
    });

    const byStatus = items.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const totalValue = items.reduce((sum, item) => sum + (item.costPrice || 0), 0);
    const totalRetailValue = items.reduce((sum, item) => sum + (item.sellingPrice || 0), 0);

    return {
      items,
      summary: {
        totalItems: items.length,
        byStatus,
        totalValue,
        totalRetailValue,
        potentialProfit: totalRetailValue - totalValue
      }
    };
  }
}
