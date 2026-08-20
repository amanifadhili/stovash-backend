#!/usr/bin/env node
/**
 * Production preflight for InventoryUpgrade.idempotencyKey @unique.
 *
 * Prisma db push treats "add unique constraint" as data-loss and demands
 * --accept-data-loss even when no rows would be deleted. We refuse that flag.
 *
 * Instead:
 *   1. Add the nullable column if it is missing (additive).
 *   2. Pre-check duplicate non-null keys.
 *   3. Keep the oldest row's original key; rename later duplicates to
 *      `{key}::dedup:{id}` so zero duplicates remain. No rows deleted.
 *   4. Create Prisma's expected unique constraint.
 *
 * After this, `prisma db push` sees the unique already present and does not warn.
 */
'use strict';

const { PrismaClient } = require('../src/generated/prisma');

const CONSTRAINT = 'inventory_upgrades_idempotencyKey_key';

async function tableExists(prisma) {
  const tables = await prisma.$queryRaw`
    SELECT to_regclass('public.inventory_upgrades')::text AS rel
  `;
  return Boolean(tables[0]?.rel);
}

async function findDuplicateKeys(prisma) {
  return prisma.$queryRaw`
    SELECT "idempotencyKey" AS key, COUNT(*)::int AS n
    FROM inventory_upgrades
    WHERE "idempotencyKey" IS NOT NULL
    GROUP BY "idempotencyKey"
    HAVING COUNT(*) > 1
    ORDER BY n DESC, key ASC
  `;
}

/**
 * Keep the earliest row (createdAt, then id) for each duplicated key.
 * Rename the rest so the unique constraint can be added.
 */
async function renameDuplicateKeys(prisma) {
  const renamed = await prisma.$queryRaw`
    WITH ranked AS (
      SELECT
        id,
        "idempotencyKey",
        ROW_NUMBER() OVER (
          PARTITION BY "idempotencyKey"
          ORDER BY "createdAt" ASC, id ASC
        ) AS rn
      FROM inventory_upgrades
      WHERE "idempotencyKey" IS NOT NULL
    ),
    extras AS (
      SELECT id, "idempotencyKey" AS old_key
      FROM ranked
      WHERE rn > 1
    ),
    updated AS (
      UPDATE inventory_upgrades u
      SET "idempotencyKey" = e.old_key || '::dedup:' || u.id::text
      FROM extras e
      WHERE u.id = e.id
      RETURNING u.id, e.old_key, u."idempotencyKey" AS new_key
    )
    SELECT id, old_key, new_key FROM updated
    ORDER BY old_key, id
  `;
  return renamed;
}

async function ensureUniqueConstraint(prisma) {
  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      ALTER TABLE inventory_upgrades
        ADD CONSTRAINT "${CONSTRAINT}" UNIQUE ("idempotencyKey");
    EXCEPTION
      WHEN duplicate_object THEN NULL;
      WHEN duplicate_table THEN NULL;
    END $$
  `);
}

async function ensureUpgradeIdempotencyUnique(prisma) {
  if (!(await tableExists(prisma))) {
    console.log('inventory_upgrades does not exist yet; Prisma db push will create it.');
    return { skipped: true, duplicates: [], renamed: [] };
  }

  await prisma.$executeRawUnsafe(
    'ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS "idempotencyKey" TEXT',
  );

  const duplicates = await findDuplicateKeys(prisma);
  if (duplicates.length > 0) {
    console.log('Duplicate inventory_upgrades.idempotencyKey values found:');
    for (const row of duplicates) {
      console.log(`  ${row.key}  (${row.n} rows)`);
    }
  }

  const renamed = duplicates.length > 0 ? await renameDuplicateKeys(prisma) : [];
  for (const row of renamed) {
    console.log(`  kept original on oldest row; renamed ${row.id}: ${row.old_key} -> ${row.new_key}`);
  }

  const remaining = await findDuplicateKeys(prisma);
  if (remaining.length > 0) {
    console.error('Duplicates remain after rename; unique constraint will not be added:');
    for (const row of remaining) {
      console.error(`  ${row.key}  (${row.n} rows)`);
    }
    throw new Error('inventory_upgrades.idempotencyKey still has duplicates after rename');
  }

  await ensureUniqueConstraint(prisma);
  console.log(
    renamed.length
      ? `Renamed ${renamed.length} duplicate key(s). inventory_upgrades."idempotencyKey" is unique.`
      : 'inventory_upgrades."idempotencyKey" is unique (no duplicate keys).',
  );
  return { skipped: false, duplicates, renamed };
}

async function main() {
  const prisma = new PrismaClient();
  try {
    await ensureUpgradeIdempotencyUnique(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  CONSTRAINT,
  findDuplicateKeys,
  renameDuplicateKeys,
  ensureUpgradeIdempotencyUnique,
};

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
