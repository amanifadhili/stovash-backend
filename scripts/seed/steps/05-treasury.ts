import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

const METHODS: { suffix: string; name: string; type: string; balance: number }[] = [
  { suffix: '01', name: 'Cash', type: 'CASH', balance: 500_000 },
  { suffix: '02', name: 'MoMo', type: 'MOBILE', balance: 350_000 },
  { suffix: '03', name: 'Bank', type: 'BANK', balance: 1_200_000 },
];

function methodId(shopKey: 'main' | 'branch', suffix: string): string {
  const shopDigit = shopKey === 'main' ? '1' : '2';
  return `a1000000-0000-4000-8000-0000006${shopDigit}${suffix.padStart(2, '0')}00`;
}

export async function seedTreasury(clients: SeedClients): Promise<void> {
  const shops: { key: 'main' | 'branch'; shopId: string }[] = [
    { key: 'main', shopId: DEMO.shops.main.id },
    { key: 'branch', shopId: DEMO.shops.branch.id },
  ];

  for (const shop of shops) {
    for (const m of METHODS) {
      const id = methodId(shop.key, m.suffix);
      const existing = await clients.treasury.paymentMethod.findFirst({
        where: {
          tenantId: DEMO.tenantId,
          shopId: shop.shopId,
          name: m.name,
        },
      });
      if (existing) {
        await clients.treasury.paymentMethod.update({
          where: { id: existing.id },
          data: { isActive: true, type: m.type },
        });
        continue;
      }

      await clients.treasury.paymentMethod.create({
        data: {
          id,
          tenantId: DEMO.tenantId,
          shopId: shop.shopId,
          name: m.name,
          type: m.type,
          balance: m.balance,
          currency: 'RWF',
          isActive: true,
          bankName: m.type === 'BANK' ? 'Bank of Kigali' : undefined,
          accountNumber: m.type === 'BANK' ? '1000123456789' : undefined,
        },
      });
    }
  }

  console.log('  treasury: Cash / MoMo / Bank per shop');
}
