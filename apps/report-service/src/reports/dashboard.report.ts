import { Injectable } from '@nestjs/common';
import { prisma } from '@electronic-shop/database';

@Injectable()
export class DashboardReport {
  async getDashboard(tenantId: string, shopId: string) {
    const [salesCount, inventoryCount, revenue, expenses] = await Promise.all([
      prisma.salesOrder.count({ where: { tenantId, shopId } }),
      prisma.inventoryItem.count({ where: { tenantId, shopId, status: 'AVAILABLE' } }),
      prisma.journalEntry.aggregate({
        where: { tenantId, shopId, entries: { some: { type: 'CREDIT', ledgerAccount: { type: 'REVENUE' } } } },
        _sum: { entries: { sum: 'amount' } }
      }),
      prisma.journalEntry.aggregate({
        where: { tenantId, shopId, entries: { some: { type: 'DEBIT', ledgerAccount: { type: 'EXPENSE' } } } },
        _sum: { entries: { sum: 'amount' } }
      })
    ]);

    return {
      salesCount,
      inventoryCount,
      revenue: revenue._sum.entries?.sum || 0,
      expenses: expenses._sum.entries?.sum || 0,
      profit: (revenue._sum.entries?.sum || 0) - (expenses._sum.entries?.sum || 0)
    };
  }
}
