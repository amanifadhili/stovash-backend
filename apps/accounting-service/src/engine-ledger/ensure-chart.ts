import { prisma as defaultPrisma } from '../database/client.js';
import { ENGINE_CHART_ACCOUNTS } from './chart.js';

type Db = typeof defaultPrisma;

export async function ensureEngineChart(
  tenantId: string,
  shopId: string,
  db: Db = defaultPrisma,
) {
  const existing = await db.chartAccount.findMany({
    where: { tenantId, shopId },
    select: { code: true },
  });
  const have = new Set(existing.map((a) => a.code));
  const missing = ENGINE_CHART_ACCOUNTS.filter((a) => !have.has(a.code));
  if (missing.length > 0) {
    await db.chartAccount.createMany({
      data: missing.map((a) => ({
        tenantId,
        shopId,
        code: a.code,
        name: a.name,
        type: a.type,
        fundCode: a.fundCode ?? null,
      })),
      skipDuplicates: true,
    });
  }

  await db.profitAllocation.upsert({
    where: { tenantId_shopId: { tenantId, shopId } },
    create: { tenantId, shopId, earnedMinor: 0n, transferredMinor: 0n },
    update: {},
  });
}
