import { spawn } from 'child_process';
import path from 'path';

// AI Studio enforces PORT 3000
const port = process.env.PORT || 3000;
console.log(`Starting Electronic Shop Platform on port ${port}...`);

const apiGatewayDir = path.resolve('apps/api-gateway');
const frontendDir = path.resolve('frontend/web');
const identityDir = path.resolve('apps/identity-service');
const accountingDir = path.resolve('apps/accounting-service');
const inventoryDir = path.resolve('apps/inventory-service');

// Start Vite dev server for frontend on port 3001
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: frontendDir,
  env: { ...process.env, PORT: '3001' },
  stdio: 'inherit'
});
frontend.on('error', (err) => console.error('Failed to start Frontend:', err));

// Start Identity Service
const identity = spawn('npm', ['run', 'dev'], {
  cwd: identityDir,
  env: { ...process.env },
  stdio: 'inherit'
});
identity.on('error', (err) => console.error('Failed to start Identity:', err));

// Start Accounting Service
const accounting = spawn('npm', ['run', 'dev'], {
  cwd: accountingDir,
  env: { ...process.env },
  stdio: 'inherit'
});
accounting.on('error', (err) => console.error('Failed to start Accounting:', err));

// Start Inventory Service
const inventory = spawn('npm', ['run', 'dev'], {
  cwd: inventoryDir,
  env: { ...process.env },
  stdio: 'inherit'
});
inventory.on('error', (err) => console.error('Failed to start Inventory:', err));

// Start API Gateway on port 3000
const gateway = spawn('npm', ['run', 'dev'], {
  cwd: apiGatewayDir,
  env: { ...process.env, PORT: port.toString() },
  stdio: 'inherit'
});
gateway.on('error', (err) => console.error('Failed to start Gateway:', err));
gateway.on('close', (code) => {
  console.log(`Gateway exited with code ${code}`);
  process.exit(code ?? 1);
});
