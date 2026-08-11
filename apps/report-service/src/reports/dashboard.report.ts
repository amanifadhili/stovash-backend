import { Injectable } from '@nestjs/common';
import { prisma } from '../database/client.js';

@Injectable()
export class DashboardReport {
  async getDashboard(tenantId: string, shopId: string) {
    const [salesCount, inventoryCount, journalEntries] = await Promise.all([
      prisma.salesOrder.count({ where: { tenantId, shopId } }),
      prisma.inventoryItem.count({ where: { tenantId, shopId, status: 'AVAILABLE' } }),
      prisma.journalEntry.findMany({
        where: { tenantId, shopId },
        include: {
          entries: {
            include: { ledgerAccount: true }
          }
        }
      })
    ]);

    const revenue = journalEntries.reduce((sum, entry) => {
      return sum + entry.entries
        .filter(e => e.type === 'CREDIT' && e.ledgerAccount.type === 'REVENUE')
        .reduce((s, e) => s + e.amount, 0);
    }, 0);

    const expenses = journalEntries.reduce((sum, entry) => {
      return sum + entry.entries
        .filter(e => e.type === 'DEBIT' && e.ledgerAccount.type === 'EXPENSE')
        .reduce((s, e) => s + e.amount, 0);
    }, 0);

    return {
      salesCount,
      inventoryCount,
      revenue,
      expenses,
      profit: revenue - expenses
    };
  }
}
