import { seedTreasuryOpeningBalances } from '../../financial-structure/seed-treasury-opening-balances.js';
import { getFinancialStructure } from '../../financial-structure/get-financial-structure.js';

describe('Seed Treasury Opening Balances Engine', () => {
  const tenantId = 'tenant-seed-treasury-test';
  const shopId = 'shop-seed-treasury-test';
  const context = { tenantId, shopId, userId: 'user-seed-test', traceId: 'trace-seed-test' };

  it('seeds 7 default Stovash treasury accounts with initial balances', async () => {
    const payload = {
      accounts: [
        { code: '1100', name: 'Profit Reserve Bank', fundCode: 'PROFIT_RESERVE', amountMinor: '1000000000', currency: 'RWF' },
        { code: '1110', name: 'Operational Cash', fundCode: 'OPERATIONAL', amountMinor: '500000000', currency: 'RWF' },
        { code: '1120', name: 'Operational MoMo', fundCode: 'OPERATIONAL', amountMinor: '250000000', currency: 'RWF' },
        { code: '1130', name: 'Operational Main Bank', fundCode: 'OPERATIONAL', amountMinor: '1500000000', currency: 'RWF' },
        { code: '1135', name: 'Other Operational Banks', fundCode: 'OPERATIONAL', amountMinor: '0', currency: 'RWF' },
        { code: '1140', name: 'Capital Bank', fundCode: 'CAPITAL', amountMinor: '5000000000', currency: 'RWF' },
        { code: '1150', name: 'Petty Cash', fundCode: 'CAPITAL', amountMinor: '100000000', currency: 'RWF' },
      ],
    };

    const result = await seedTreasuryOpeningBalances(payload, context);
    expect(result.status).toBe('success');
    expect(result.data?.seededCount).toBe(7);
    expect(result.data?.totalCapitalMinor).toBe('9350000000');
  });

  it('fails gracefully when tenantId or shopId is missing', async () => {
    const result = await seedTreasuryOpeningBalances({ accounts: [] }, {} as any);
    expect(result.status).toBe('error');
    expect(result.message).toMatch(/tenantId and shopId are required/);
  });
});
