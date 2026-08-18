/**
 * Demo treasury seed — engine fund tree only.
 * PaymentMethod till seed is OBSOLETE. Does not write PaymentMethod.balance.
 * Opening money is OWNER_CAPITAL_IN in step 11.
 */
import { DEMO } from '../demo-ids.js';
import { getFinancialStructure } from '../../../apps/treasury-service/src/financial-structure/get-financial-structure.js';

export async function seedTreasury(): Promise<void> {
  for (const shop of [DEMO.shops.main, DEMO.shops.branch]) {
    const result = await getFinancialStructure({
      tenantId: DEMO.tenantId,
      shopId: shop.id,
      userId: DEMO.users.admin.id,
      traceId: 'seed-demo-structure',
    });
    if (result.status !== 'success') {
      throw new Error(`GetFinancialStructure failed for ${shop.name}: ${result.message}`);
    }
  }
  console.log('  treasury: Capital / Operational / Profit Reserve + physical accounts. No till balance field.');
}
