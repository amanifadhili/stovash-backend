import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const appRoot = path.join(root, 'apps');
const services = fs
  .readdirSync(appRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => fs.existsSync(path.join(appRoot, name, 'prisma', 'schema.prisma')))
  .sort();

const rows = services.map((service) => {
  const prismaRoot = path.join(appRoot, service, 'prisma');
  const migrationRoot = path.join(prismaRoot, 'migrations');
  const migrationEntries = fs.existsSync(migrationRoot)
    ? fs
        .readdirSync(migrationRoot, { withFileTypes: true })
        .map((entry) => ({ name: entry.name, isDirectory: entry.isDirectory() }))
        .sort()
    : [];
  const migrations = migrationEntries.filter((entry) => entry.isDirectory).map((entry) => entry.name);
  const sqlMigrations = migrationEntries
    .filter((entry) => !entry.isDirectory && entry.name.endsWith('.sql'))
    .map((entry) => entry.name);

  return {
    service,
    schema: path.relative(root, path.join(prismaRoot, 'schema.prisma')),
    migrations,
    sqlMigrations,
  };
});

console.log('Service migration readiness');
console.log('===========================');
for (const row of rows) {
  const status = row.migrations.length > 0
    ? 'PRISMA_MIGRATIONS'
    : row.sqlMigrations.length > 0
      ? 'AD_HOC_SQL'
      : 'NO_MIGRATIONS';
  console.log(`${row.service.padEnd(22)} ${status.padEnd(17)} ${row.migrations.length} Prisma directories, ${row.sqlMigrations.length} SQL files`);
  if (row.migrations.length > 0) {
    for (const migration of row.migrations) console.log(`  - ${migration}`);
  }
  for (const migration of row.sqlMigrations) console.log(`  - ${migration}`);
}

const notReady = rows
  .filter((row) => row.migrations.length === 0)
  .map((row) => row.service);
if (notReady.length > 0) {
  console.warn(`\nMigration baselines or adoption plans required before migrate deploy: ${notReady.join(', ')}`);
  if (process.argv.includes('--strict')) process.exit(1);
}
