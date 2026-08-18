/**
 * STOVASH portable demo seed — idempotent multi-DB seed for end-to-end testing.
 *
 * Usage (from electronic-shop/):
 *   npm run seed:demo
 *
 * Requires: Postgres up, migrations applied, *_DATABASE_URL in .env,
 * Prisma clients generated under apps/<service>/src/generated/prisma.
 *
 * Money is posted through the financial engine (OWNER_CAPITAL_IN, journals,
 * treasury movements). PaymentMethod.balance is not written as truth.
 */
import { DEMO, DEMO_PASSWORD } from './seed/demo-ids.js';
import { createSeedClients, disconnectAll } from './seed/prisma-clients.js';
import { prisma as accountingPrisma } from '../apps/accounting-service/src/database/client.js';
import { prisma as treasuryPrisma } from '../apps/treasury-service/src/database/client.js';
import { seedIdentity } from './seed/steps/01-identity.js';
import { seedTenant } from './seed/steps/02-tenant.js';
import { seedSuppliers } from './seed/steps/03-suppliers.js';
import { seedAccounting } from './seed/steps/04-accounting.js';
import { seedTreasury } from './seed/steps/05-treasury.js';
import { seedCatalog } from './seed/steps/06-catalog.js';
import { seedPurchasesAndStock } from './seed/steps/07-purchases-stock.js';
import { seedSales } from './seed/steps/08-sales.js';
import { seedCustomers } from './seed/steps/09-customers.js';
import { seedContactsAndRentals } from './seed/steps/10-contacts-rentals.js';
import { seedEngineHistory } from './seed/steps/11-engine-history.js';
import { SEED_RANGE } from './seed/engine-bridge.js';

async function main() {
  console.log('\n==> STOVASH seed:demo (idempotent, engine books)\n');
  const clients = createSeedClients();

  try {
    console.log('1/11 Identity');
    await seedIdentity(clients);

    console.log('2/11 Tenant');
    await seedTenant(clients);

    console.log('3/11 Suppliers');
    await seedSuppliers(clients);

    console.log('4/11 Accounting leftover rows (not SoT)');
    await seedAccounting(clients);

    console.log('5/11 Treasury fund tree');
    await seedTreasury();

    console.log('6/11 Catalog');
    const products = await seedCatalog(clients);

    console.log('7/11 Purchases + stock');
    await seedPurchasesAndStock(clients, products);

    console.log('8/11 Draft / cancelled sales (no money)');
    await seedSales(clients);

    console.log('9/11 Customers');
    await seedCustomers(clients);

    console.log('10/11 Contacts + rentals');
    await seedContactsAndRentals(clients);

    console.log(`11/11 Engine history ${SEED_RANGE.start} → ${SEED_RANGE.end} (Mon–Sat)`);
    await seedEngineHistory(clients);

    console.log('\n----------------------------------------');
    console.log('Demo seed complete. Login cheat-sheet:');
    console.log(`  Tenant : ${DEMO.tenantName} (${DEMO.tenantId})`);
    console.log(`  Shops  : ${DEMO.shops.main.name} | ${DEMO.shops.branch.name}`);
    console.log(`  Admin  : ${DEMO.users.admin.email} / ${DEMO_PASSWORD}`);
    console.log(`  Manager: ${DEMO.users.manager.email} / ${DEMO_PASSWORD}`);
    console.log(`  Staff  : ${DEMO.users.staff.email} / ${DEMO_PASSWORD}`);
    console.log(`  Acct   : ${DEMO.users.accountant.email} / ${DEMO_PASSWORD}`);
    console.log('  Sample SKU: STOVASH-DEMO-APL-MBA-M2');
    console.log('  Purchases : PO-DEMO-001, PO-DEMO-002 (AP via engine)');
    console.log(`  Busy books: ${SEED_RANGE.start} → ${SEED_RANGE.end} working days`);
    console.log('  Open /accounting/reports and /treasury/balances after login.');
    console.log('----------------------------------------\n');
  } finally {
    await disconnectAll(clients);
    await Promise.all([accountingPrisma.$disconnect(), treasuryPrisma.$disconnect()]);
  }
}

main().catch((err) => {
  console.error('\nseed:demo failed:\n', err);
  process.exit(1);
});
