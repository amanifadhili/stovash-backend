import { prisma as defaultPrisma } from '../database/client.js';

type Db = typeof defaultPrisma;

/**
 * Phase 6 treasury SoT: physical balances = Σ posted TreasuryMovement rows.
 * Approved reconciliation is included because it posts a RECONCILIATION_ADJUSTMENT movement.
 * Unapproved counts are not movements and must not appear here.
 */
export async function derivedBalances(
  tenantId: string,
  shopId: string,
  db: Db = defaultPrisma,
): Promise<Map<string, bigint>> {
  const movements = await db.treasuryMovement.findMany({
    where: { tenantId, shopId },
    select: { fromPhysicalId: true, toPhysicalId: true, amountMinor: true },
  });
  const balances = new Map<string, bigint>();
  const add = (id: string | null, delta: bigint) => {
    if (!id) return;
    balances.set(id, (balances.get(id) ?? 0n) + delta);
  };
  for (const row of movements) {
    add(row.fromPhysicalId, -row.amountMinor);
    add(row.toPhysicalId, row.amountMinor);
  }
  return balances;
}

export function balanceOf(balances: Map<string, bigint>, id: string): bigint {
  return balances.get(id) ?? 0n;
}
