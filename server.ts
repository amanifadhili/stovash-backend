import { spawn } from 'child_process';
import path from 'path';

// AI Studio enforces PORT 3000
const port = process.env.PORT || 3000;

console.log(`Starting Electronic Shop Platform on port ${port}...`);

// For AI Studio environment, we will start the API Gateway.
// The frontend will be served statically by the API Gateway in production mode.
const apiGatewayDir = path.resolve('apps/api-gateway');
const frontendDir = path.resolve('frontend/web');
const identityDir = path.resolve('apps/identity-service');

// Start Vite dev server for frontend on port 3001
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: frontendDir,
  env: {
    ...process.env,
    PORT: '3001'
  },
  stdio: 'inherit'
});

frontend.on('error', (err) => {
  console.error('Failed to start Frontend Dev Server:', err);
});

// Start Identity Service
const identity = spawn('npm', ['run', 'dev'], {
  cwd: identityDir,
  env: {
    ...process.env,
  },
  stdio: 'inherit'
});

identity.on('error', (err) => {
  console.error('Failed to start Identity Service:', err);
});

// Start API Gateway on port 3000
const gateway = spawn('npm', ['run', 'dev'], {
  cwd: apiGatewayDir,
  env: {
    ...process.env,
    PORT: port.toString()
  },
  stdio: 'inherit'
});

gateway.on('error', (err) => {
  console.error('Failed to start API Gateway:', err);
});

gateway.on('close', (code) => {
  console.log(`API Gateway process exited with code ${code}`);
  process.exit(code ?? 1);
});
