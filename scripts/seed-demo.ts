/**
 * STOVASH portable demo seed — idempotent multi-DB seed for end-to-end testing.
 *
 * Usage (from electronic-shop/):
 *   npm run seed:demo
 *
 * Requires: Postgres up, migrations applied, *_DATABASE_URL in .env,
 * Prisma clients generated under apps/<service>/src/generated/prisma.
 */
import { DEMO, DEMO_PASSWORD } from './seed/demo-ids.js';
import { createSeedClients, disconnectAll } from './seed/prisma-clients.js';
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

async function main() {
  console.log('\n==> STOVASH seed:demo (idempotent)\n');
  const clients = createSeedClients();

  try {
    console.log('1/10 Identity');
    await seedIdentity(clients);

    console.log('2/10 Tenant');
    await seedTenant(clients);

    console.log('3/10 Suppliers');
    await seedSuppliers(clients);

    console.log('4/10 Accounting');
    await seedAccounting(clients);

    console.log('5/10 Treasury');
    await seedTreasury(clients);

    console.log('6/10 Catalog');
    const products = await seedCatalog(clients);

    console.log('7/10 Purchases + stock');
    const { availableItemIds } = await seedPurchasesAndStock(clients, products);

    console.log('8/10 Sales');
    await seedSales(clients, availableItemIds);

    console.log('9/10 Customers');
    await seedCustomers(clients);

    console.log('10/10 Contacts + rentals');
    await seedContactsAndRentals(clients);

    console.log('\n----------------------------------------');
    console.log('Demo seed complete. Login cheat-sheet:');
    console.log(`  Tenant : ${DEMO.tenantName} (${DEMO.tenantId})`);
    console.log(`  Shops  : ${DEMO.shops.main.name} | ${DEMO.shops.branch.name}`);
    console.log(`  Admin  : ${DEMO.users.admin.email} / ${DEMO_PASSWORD}`);
    console.log(`  Manager: ${DEMO.users.manager.email} / ${DEMO_PASSWORD}`);
    console.log(`  Staff  : ${DEMO.users.staff.email} / ${DEMO_PASSWORD}`);
    console.log(`  Acct   : ${DEMO.users.accountant.email} / ${DEMO_PASSWORD}`);
    console.log('  Sample SKU: STOVASH-DEMO-APL-MBA-M2');
    console.log('  Purchases : PO-DEMO-001, PO-DEMO-002');
    console.log('  Sales     : SO-DEMO-001 … SO-DEMO-010');
    console.log('----------------------------------------\n');
  } finally {
    await disconnectAll(clients);
  }
}

main().catch((err) => {
  console.error('\nseed:demo failed:\n', err);
  process.exit(1);
});
