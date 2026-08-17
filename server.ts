import { spawn, type ChildProcess } from 'child_process';
import path from 'path';

try {
  process.loadEnvFile(path.resolve('.env'));
} catch (err) {
  console.warn('Failed to load .env file:', (err as Error).message);
}

const port = process.env.PORT || 3000;
const npmScript = process.env.NODE_ENV === 'production' ? 'start' : 'dev';
console.log(`Starting Electronic Shop Platform on port ${port} (${npmScript})...`);

function startService(
  name: string,
  cwd: string,
  extraEnv: Record<string, string> = {},
): ChildProcess {
  const child = spawn('npm', ['run', npmScript], {
    cwd,
    env: { ...process.env, ...extraEnv },
    stdio: 'inherit',
  });
  child.on('error', (err) => console.error(`Failed to start ${name}:`, err));
  return child;
}

const identity = startService('Identity', path.resolve('apps/identity-service'));
const accounting = startService('Accounting', path.resolve('apps/accounting-service'));
const customer = startService('Customer', path.resolve('apps/customer-service'), {
  CUSTOMER_SERVICE_PORT: process.env.CUSTOMER_SERVICE_PORT || '3011',
});
const inventory = startService('Inventory', path.resolve('apps/inventory-service'));
const supplier = startService('Supplier', path.resolve('apps/supplier-service'), {
  SUPPLIER_SERVICE_PORT: process.env.SUPPLIER_SERVICE_PORT || '3012',
});
const sales = startService('Sales', path.resolve('apps/sales-service'));
const treasury = startService('Treasury', path.resolve('apps/treasury-service'));
const purchase = startService('Purchase', path.resolve('apps/purchase-service'), {
  PURCHASE_SERVICE_PORT: process.env.PURCHASE_SERVICE_PORT || '3007',
});
const notification = startService('Notification', path.resolve('apps/notification-service'), {
  NOTIFICATION_SERVICE_PORT: process.env.NOTIFICATION_SERVICE_PORT || '3013',
});
const tenant = startService('Tenant', path.resolve('apps/tenant-service'), {
  TENANT_SERVICE_PORT: process.env.TENANT_SERVICE_PORT || '3008',
});
const gateway = startService('Gateway', path.resolve('apps/api-gateway'), {
  PORT: port.toString(),
});

const children = [
  identity,
  tenant,
  accounting,
  inventory,
  sales,
  treasury,
  purchase,
  customer,
  supplier,
  notification,
  gateway,
];

function shutdown(code = 0) {
  for (const child of children) {
    child.kill();
  }
  process.exit(code);
}

gateway.on('close', (code) => {
  console.log(`Gateway exited with code ${code}`);
  shutdown(code ?? 1);
});

process.on('SIGTERM', () => shutdown(0));
process.on('SIGINT', () => shutdown(0));
