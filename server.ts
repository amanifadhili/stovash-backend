import { spawn } from 'child_process';
import path from 'path';

// Load environment variables from .env
try {
  process.loadEnvFile(path.resolve('.env'));
} catch (err) {
  console.warn('Failed to load .env file:', (err as Error).message);
}

// AI Studio enforces PORT 3000
const port = process.env.PORT || 3000;
console.log(`Starting Electronic Shop Platform on port ${port}...`);

const apiGatewayDir = path.resolve('apps/api-gateway');
const identityDir = path.resolve('apps/identity-service');
const accountingDir = path.resolve('apps/accounting-service');
const customerDir = path.resolve('apps/customer-service');
const inventoryDir = path.resolve('apps/inventory-service');
const salesDir = path.resolve('apps/sales-service');
const treasuryDir = path.resolve('apps/treasury-service');
const purchaseDir = path.resolve('apps/purchase-service');
const notificationDir = path.resolve('apps/notification-service');
const supplierDir = path.resolve('apps/supplier-service');
const tenantDir = path.resolve('apps/tenant-service');

// Start Identity Service on port 3002
const identity = spawn('npm', ['run', 'dev'], {
  cwd: identityDir,
  env: { ...process.env },
  stdio: 'inherit'
});
identity.on('error', (err) => console.error('Failed to start Identity:', err));

// Start Accounting Service on port 3003
const accounting = spawn('npm', ['run', 'dev'], {
  cwd: accountingDir,
  env: { ...process.env },
  stdio: 'inherit'
});
accounting.on('error', (err) => console.error('Failed to start Accounting:', err));

// Start Customer Service on port 3011
const customer = spawn('npm', ['run', 'dev'], {
  cwd: customerDir,
  env: { ...process.env, CUSTOMER_SERVICE_PORT: '3011' },
  stdio: 'inherit'
});
customer.on('error', (err) => console.error('Failed to start Customer:', err));

// Start Inventory Service on port 3004
const inventory = spawn('npm', ['run', 'dev'], {
  cwd: inventoryDir,
  env: { ...process.env },
  stdio: 'inherit'
});
inventory.on('error', (err) => console.error('Failed to start Inventory:', err));

// Start Supplier Service on port 3012
const supplier = spawn('npm', ['run', 'dev'], {
  cwd: supplierDir,
  env: { ...process.env, SUPPLIER_SERVICE_PORT: '3012' },
  stdio: 'inherit'
});
supplier.on('error', (err) => console.error('Failed to start Supplier:', err));

// Start Sales Service on port 3005
const sales = spawn('npm', ['run', 'dev'], {
  cwd: salesDir,
  env: { ...process.env },
  stdio: 'inherit'
});
sales.on('error', (err) => console.error('Failed to start Sales:', err));

// Start Treasury Service on port 3006
const treasury = spawn('npm', ['run', 'dev'], {
  cwd: treasuryDir,
  env: { ...process.env },
  stdio: 'inherit'
});
treasury.on('error', (err) => console.error('Failed to start Treasury:', err));

// Start Purchase Service on port 3007
const purchase = spawn('npm', ['run', 'dev'], {
  cwd: purchaseDir,
  env: { ...process.env, PURCHASE_SERVICE_PORT: '3007' },
  stdio: 'inherit'
});
purchase.on('error', (err) => console.error('Failed to start Purchase:', err));

// Start Notification Service on port 3013
const notification = spawn('npm', ['run', 'dev'], {
  cwd: notificationDir,
  env: { ...process.env, NOTIFICATION_SERVICE_PORT: '3013' },
  stdio: 'inherit'
});
notification.on('error', (err) => console.error('Failed to start Notification:', err));

// Start API Gateway on port 3000
const gateway = spawn('npm', ['run', 'dev'], {
  cwd: apiGatewayDir,
  env: { ...process.env, PORT: port.toString() },
  stdio: 'inherit'
});
gateway.on('error', (err) => console.error('Failed to start Gateway:', err));
gateway.on('close', (code) => {
  console.log(`Gateway exited with code ${code}`);
  // Kill all child processes
  [identity, tenant, accounting, inventory, sales, treasury, purchase, customer, supplier, notification].forEach((p) => p.kill());
  process.exit(code ?? 1);
});

// Start Tenant Service on port 3008
const tenant = spawn('npm', ['run', 'dev'], {
  cwd: tenantDir,
  env: { ...process.env, TENANT_SERVICE_PORT: '3008' },
  stdio: 'inherit'
});
tenant.on('error', (err) => console.error('Failed to start Tenant:', err));