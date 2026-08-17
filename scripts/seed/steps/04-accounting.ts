/**
 * Demo accounting leftover tables — OBSOLETE for product UI (not the money source of truth).
 * Engine chart + journals are created by seed step 11 (PostFinancialTransaction / engine posts).
 * Do not treat LedgerAccount.balance or work periods as live books.
 */
import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

const COA: { code: string; name: string; type: string }[] = [
  { code: '1001', name: 'Cash (legacy)', type: 'ASSET' },
  { code: '1002', name: 'Mobile Money (legacy)', type: 'ASSET' },
  { code: '1003', name: 'Bank (legacy)', type: 'ASSET' },
];

function accountId(shopKey: 'main' | 'branch', code: string): string {
  const shopDigit = shopKey === 'main' ? '1' : '2';
  const codePad = code.padStart(4, '0');
  return `a1000000-0000-4000-8000-0000005${shopDigit}${codePad}`;
}

export async function seedAccounting(clients: SeedClients): Promise<void> {
  const shops: { key: 'main' | 'branch'; shopId: string }[] = [
    { key: 'main', shopId: DEMO.shops.main.id },
    { key: 'branch', shopId: DEMO.shops.branch.id },
  ];

  for (const shop of shops) {
    for (const acct of COA) {
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
          id: accountId(shop.key, acct.code),
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
  }

  console.log('  accounting: leftover CoA rows at 0 (not SoT). Engine books land in step 11.');
}
