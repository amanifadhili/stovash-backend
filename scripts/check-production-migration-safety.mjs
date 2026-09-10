import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  '.github/workflows/backend-deploy.yml',
  'deploy/release.sh',
  'deploy/release-ghcr.sh',
];
const forbidden = /prisma\s+(?:db\s+push|db\s+push).*--accept-data-loss|--accept-data-loss.*prisma\s+db\s+push/gs;
const findings = [];

for (const relative of files) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (forbidden.test(content)) findings.push(relative);
  forbidden.lastIndex = 0;
}

if (findings.length === 0) {
  console.log('No production db push --accept-data-loss usage found.');
  process.exit(0);
}

console.warn('Production migration safety findings:');
for (const file of findings) console.warn(`  - ${file}`);
console.warn('Replace production db push with reviewed prisma migrate deploy before migration cutover.');

if (process.argv.includes('--strict')) process.exit(1);
