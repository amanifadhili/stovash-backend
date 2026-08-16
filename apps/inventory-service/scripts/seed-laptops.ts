/**
 * LEGACY laptop flood seed — prefer the portable demo suite:
 *
 *   cd electronic-shop && npm run seed:demo
 *
 * This script required a personal user (sincereabayo@gmail.com) and a
 * "Kacyiru" shop, and was not idempotent (new PO timestamp each run).
 *
 * Kept as a thin pointer so old docs/commands fail loudly with guidance.
 */
/// <reference types="node" />

console.error(`
[deprecated] apps/inventory-service/scripts/seed-laptops.ts

Use the system-wide demo seed instead:

  cd electronic-shop
  npm run seed:demo

That creates admin@stovash.local / admin123 with catalog, purchases,
stock, sales, suppliers, treasury, accounting, customers, and rentals.
`);
process.exit(1);
