/**
 * Loads electronic-shop/.env and constructs per-service Prisma clients.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient as IdentityClient } from '../../apps/identity-service/src/generated/prisma/index.js';
import { PrismaClient as TenantClient } from '../../apps/tenant-service/src/generated/prisma/index.js';
import { PrismaClient as InventoryClient } from '../../apps/inventory-service/src/generated/prisma/index.js';
import { PrismaClient as PurchaseClient } from '../../apps/purchase-service/src/generated/prisma/index.js';
import { PrismaClient as SalesClient } from '../../apps/sales-service/src/generated/prisma/index.js';
import { PrismaClient as SupplierClient } from '../../apps/supplier-service/src/generated/prisma/index.js';
import { PrismaClient as AccountingClient } from '../../apps/accounting-service/src/generated/prisma/index.js';
import { PrismaClient as TreasuryClient } from '../../apps/treasury-service/src/generated/prisma/index.js';
import { PrismaClient as CustomerClient } from '../../apps/customer-service/src/generated/prisma/index.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const REQUIRED_ENV = [
  'IDENTITY_DATABASE_URL',
  'TENANT_DATABASE_URL',
  'INVENTORY_DATABASE_URL',
  'SALES_DATABASE_URL',
  'PURCHASE_DATABASE_URL',
  'SUPPLIER_DATABASE_URL',
  'ACCOUNTING_DATABASE_URL',
  'TREASURY_DATABASE_URL',
  'CUSTOMER_DATABASE_URL',
] as const;

export function loadSeedEnv(): void {
  try {
    process.loadEnvFile(path.join(ROOT, '.env'));
  } catch (err) {
    console.warn('Could not load .env:', (err as Error).message);
  }

  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(
      `Missing required env vars for seed:demo:\n  ${missing.join('\n  ')}\n` +
        `Set them in ${path.join(ROOT, '.env')}`,
    );
  }
}

function clientOpts(url: string) {
  return { datasources: { db: { url } } };
}

export type SeedClients = {
  identity: IdentityClient;
  tenant: TenantClient;
  inventory: InventoryClient;
  purchase: PurchaseClient;
  sales: SalesClient;
  supplier: SupplierClient;
  accounting: AccountingClient;
  treasury: TreasuryClient;
  customer: CustomerClient;
};

export function createSeedClients(): SeedClients {
  loadSeedEnv();
  return {
    identity: new IdentityClient(clientOpts(process.env.IDENTITY_DATABASE_URL!)),
    tenant: new TenantClient(clientOpts(process.env.TENANT_DATABASE_URL!)),
    inventory: new InventoryClient(clientOpts(process.env.INVENTORY_DATABASE_URL!)),
    purchase: new PurchaseClient(clientOpts(process.env.PURCHASE_DATABASE_URL!)),
    sales: new SalesClient(clientOpts(process.env.SALES_DATABASE_URL!)),
    supplier: new SupplierClient(clientOpts(process.env.SUPPLIER_DATABASE_URL!)),
    accounting: new AccountingClient(clientOpts(process.env.ACCOUNTING_DATABASE_URL!)),
    treasury: new TreasuryClient(clientOpts(process.env.TREASURY_DATABASE_URL!)),
    customer: new CustomerClient(clientOpts(process.env.CUSTOMER_DATABASE_URL!)),
  };
}

export async function disconnectAll(clients: SeedClients): Promise<void> {
  await Promise.all([
    clients.identity.$disconnect(),
    clients.tenant.$disconnect(),
    clients.inventory.$disconnect(),
    clients.purchase.$disconnect(),
    clients.sales.$disconnect(),
    clients.supplier.$disconnect(),
    clients.accounting.$disconnect(),
    clients.treasury.$disconnect(),
    clients.customer.$disconnect(),
  ]);
}
