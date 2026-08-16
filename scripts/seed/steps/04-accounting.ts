import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

const COA: { code: string; name: string; type: string }[] = [
  { code: '1001', name: 'Cash', type: 'ASSET' },
  { code: '1002', name: 'Mobile Money', type: 'ASSET' },
  { code: '1003', name: 'Bank', type: 'ASSET' },
  { code: '1101', name: 'Accounts Receivable', type: 'ASSET' },
  { code: '1200', name: 'Accounts Receivable (Trade)', type: 'ASSET' },
  { code: '1300', name: 'Inventory Asset', type: 'ASSET' },
  { code: '2001', name: 'Accounts Payable', type: 'LIABILITY' },
  { code: '3001', name: 'Owner Equity', type: 'EQUITY' },
  { code: '4001', name: 'Sales Revenue', type: 'REVENUE' },
  { code: '5001', name: 'Cost of Goods Sold', type: 'EXPENSE' },
  { code: '5100', name: 'Operating Expense', type: 'EXPENSE' },
];

function accountId(shopKey: 'main' | 'branch', code: string): string {
  const shopDigit = shopKey === 'main' ? '1' : '2';
  const codePad = code.padStart(4, '0');
  return `a1000000-0000-4000-8000-0000005${shopDigit}${codePad}`;
}

export async function seedAccounting(clients: SeedClients): Promise<void> {
  const shops: { key: 'main' | 'branch'; shopId: string; wpId: string }[] = [
    {
      key: 'main',
      shopId: DEMO.shops.main.id,
      wpId: DEMO.workPeriods.mainAccounting,
    },
    {
      key: 'branch',
      shopId: DEMO.shops.branch.id,
      wpId: DEMO.workPeriods.branchAccounting,
    },
  ];

  for (const shop of shops) {
    for (const acct of COA) {
      const id = accountId(shop.key, acct.code);
      const existing = await clients.accounting.ledgerAccount.findFirst({
        where: {
          tenantId: DEMO.tenantId,
          shopId: shop.shopId,
          code: acct.code,
          deletedAt: null,
        },
      });
      if (existing) continue;

      await clients.accounting.ledgerAccount.create({
        data: {
          id,
          tenantId: DEMO.tenantId,
          shopId: shop.shopId,
          code: acct.code,
          name: acct.name,
          type: acct.type,
          balance: 0,
          createdBy: DEMO.users.admin.id,
        },
      });
    }

    const openWp = await clients.accounting.workPeriod.findFirst({
      where: { shopId: shop.shopId, status: 'OPEN' },
    });
    if (!openWp) {
      await clients.accounting.workPeriod.upsert({
        where: { id: shop.wpId },
        update: { status: 'OPEN' },
        create: {
          id: shop.wpId,
          tenantId: DEMO.tenantId,
          shopId: shop.shopId,
          openedBy: DEMO.users.admin.id,
          status: 'OPEN',
          createdBy: DEMO.users.admin.id,
        },
      });
    }
  }

  console.log('  accounting: COA + open work periods for 2 shops');
}
