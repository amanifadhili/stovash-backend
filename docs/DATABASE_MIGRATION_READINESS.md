# Database Migration Readiness

Status: inventory only. Production deployment still uses the existing PM2 workflow. Do not enable `prisma migrate deploy` for all services until each service below has a reviewed baseline or adoption plan.

## Goals

These are separate goals:

- **Zero unintended data loss:** existing rows and schema behavior are preserved.
- **Zero or minimal application downtime:** the application remains available during compatible schema rollout.

Production must not use `prisma db push --accept-data-loss` as a migration mechanism.

## Service Inventory

| Service            | Prisma schema                                  | Database variable         | Repository state             | Next action                                                                            |
| ------------------ | ---------------------------------------------- | ------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| identity-service   | `apps/identity-service/prisma/schema.prisma`   | `IDENTITY_DATABASE_URL`   | Prisma migration directories | Inspect production `_prisma_migrations`; test `migrate deploy` on a restored backup    |
| accounting-service | `apps/accounting-service/prisma/schema.prisma` | `ACCOUNTING_DATABASE_URL` | Ad hoc SQL files             | Convert/reconcile SQL into reviewed migrations; baseline existing tables before deploy |
| customer-service   | `apps/customer-service/prisma/schema.prisma`   | `CUSTOMER_DATABASE_URL`   | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| inventory-service  | `apps/inventory-service/prisma/schema.prisma`  | `INVENTORY_DATABASE_URL`  | Ad hoc SQL files             | Convert/reconcile SQL and backfills; baseline existing tables before deploy            |
| purchase-service   | `apps/purchase-service/prisma/schema.prisma`   | `PURCHASE_DATABASE_URL`   | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| report-service     | `apps/report-service/prisma/schema.prisma`     | `REPORT_DATABASE_URL`     | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| sales-service      | `apps/sales-service/prisma/schema.prisma`      | `SALES_DATABASE_URL`      | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| supplier-service   | `apps/supplier-service/prisma/schema.prisma`   | `SUPPLIER_DATABASE_URL`   | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| tenant-service     | `apps/tenant-service/prisma/schema.prisma`     | `TENANT_DATABASE_URL`     | No migration files           | Create a production-derived baseline; do not generate a blind init migration           |
| treasury-service   | `apps/treasury-service/prisma/schema.prisma`   | `TREASURY_DATABASE_URL`   | Ad hoc SQL files             | Convert/reconcile SQL and data updates; baseline existing tables before deploy         |

## Existing Migration Files

### Identity

Identity has Prisma migration directories:

- `00000000000000_init_identity`
- `00000000000001_add_tenants`
- `20260909205714_google_accounts`
- `add_google_oauth_support`

The production migration table must be inspected before applying these. The baseline migrations must not be replayed against an existing database that already contains those tables.

**Known ordering blocker:** `20260909205714_google_accounts` creates the
`sessions_tokenHash_idx` index, but `add_google_oauth_support` is ordered after
it and is the migration that adds `sessions.tokenHash`. A fresh shadow database
would therefore try to create the index before the column exists. Do not add
identity to the production `migrate deploy` allowlist until this ordering is
reconciled against the production `_prisma_migrations` table. Do not rename or
rewrite an already-applied migration without a compatibility plan.

### Ad Hoc SQL

Accounting, inventory, and treasury contain SQL files under their Prisma directories. These files use `CREATE TABLE IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`, or data updates and are not tracked by Prisma's migration history. They need explicit adoption decisions before `migrate deploy` can replace `db push`.

## Required Baseline Procedure

For each service without Prisma migration directories:

1. Take a PostgreSQL backup from the target database.
2. Restore it into an isolated staging database.
3. Compare the live schema with the service Prisma schema using `prisma db pull` and a reviewed schema diff.
4. Create a baseline migration that represents the existing schema without dropping or recreating existing tables.
5. Mark the baseline as applied only after the restored database matches the baseline.
6. Apply a small forward migration to staging and verify existing rows, indexes, constraints, and application behavior.
7. Repeat against a fresh backup before production adoption.

Do not run `prisma migrate dev` against production. Do not use `--accept-data-loss` for the baseline or adoption step.

## Deployment Gate

The future migration job must:

1. Verify the backup completed.
2. Run only an explicit allowlist of reviewed service migrations.
3. Execute `prisma migrate deploy` and fail immediately on error.
4. Start or activate the new application image only after migrations succeed.
5. Preserve the prior image tag and document rollback steps.

Until this document's service rows have reviewed adoption status, the current PM2 deployment remains the active deployment path.

## Backup Utility

The repository includes a fail-fast backup utility for the future migration job:

```bash
export ACCOUNTING_DATABASE_URL='postgresql://...'
export CUSTOMER_DATABASE_URL='postgresql://...'
# Export the remaining *_DATABASE_URL values through the deployment secret store.
BACKUP_DIR=/var/backups/stovash/$(date -u +%Y%m%dT%H%M%SZ) npm run db:backup
```

The utility writes PostgreSQL custom-format dumps, a manifest, and `backup.complete` only after every `pg_dump` succeeds. It stops on a missing database variable or failed `pg_dump`. Use `DRY_RUN=1` to verify the service allowlist without connecting to a database. Do not source or print the production environment file, and do not commit backup files.

## Migration Runner

The future migration step is intentionally dry-run by default:

```bash
BACKUP_DIR=/var/backups/stovash/20260911T000000Z \
MIGRATION_SERVICES=identity-service \
npm run db:migrate:deploy
```

It requires a completed backup manifest, `backup.complete`, and an explicit service allowlist. It refuses services without Prisma migration directories. To execute a reviewed migration, add `APPLY_MIGRATIONS=1`; do not add that flag to the active PM2 deployment until the service's migration history has been reconciled and tested against a restored backup.

The repository also exposes `npm run db:migration:safety`, which reports production deployment files that still contain `prisma db push --accept-data-loss`. Its strict form is reserved for the migration cutover gate:

```bash
npm run db:migration:safety:strict
```
