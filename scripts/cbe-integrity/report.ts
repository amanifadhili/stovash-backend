/**
 * Phase 6 CBE integrity CLI (report-only).
 *
 *   npx tsx scripts/cbe-integrity/report.ts
 *
 * Does not UPDATE posted amounts, journals, obligations, or FT rows.
 * Projection backfill is the same report; apply is intentionally unsupported.
 */
import { findingsFromEngine, findingsFromSales, IntegrityFinding } from './findings.ts';

async function main() {
  const salesUrl = process.env.SALES_DATABASE_URL;
  const accountingUrl = process.env.ACCOUNTING_DATABASE_URL;
  const treasuryUrl = process.env.TREASURY_DATABASE_URL;

  if (!salesUrl) {
    console.log(JSON.stringify({
      ok: true,
      mode: 'report-only',
      note: 'SALES_DATABASE_URL not set; no live scan. Findings helpers are unit-tested.',
      findings: [],
      mutatesPostedAmounts: false,
    }, null, 2));
    return;
  }

  const { PrismaClient } = await import('../../apps/sales-service/src/generated/prisma/index.js').catch(() => ({ PrismaClient: null as any }));
  if (!PrismaClient) {
    console.error('Sales Prisma client not generated; aborting without writes.');
    process.exit(1);
  }

  const sales = new PrismaClient({ datasources: { db: { url: salesUrl } } });
  const findings: IntegrityFinding[] = [];
  try {
    const saleRows = await sales.sale.findMany({
      select: { id: true, commercialStatus: true, accountingStatus: true },
    });
    const paymentRows = await sales.salePayment.findMany({
      select: { id: true, saleId: true, accountingRef: true },
    });
    findings.push(...findingsFromSales({ sales: saleRows, payments: paymentRows }));

    if (accountingUrl && treasuryUrl) {
      // Optional live cross-db scan is left for operators with all URLs set.
      // This CLI still never writes books.
      findings.push(
        ...findingsFromEngine({
          confirmedSaleIds: saleRows.filter((s) => s.commercialStatus === 'CONFIRMED').map((s) => s.id),
          revenueSourceIds: [],
          salePaymentMovementIds: paymentRows
            .map((p) => {
              try {
                return JSON.parse(String(p.accountingRef || '{}')).treasuryMovementId || '';
              } catch {
                return '';
              }
            })
            .filter(Boolean),
          treasurySalePaymentMovementIds: [],
        }),
      );
    }
  } finally {
    await sales.$disconnect();
  }

  console.log(JSON.stringify({
    ok: findings.length === 0,
    mode: 'report-only',
    mutatesPostedAmounts: false,
    backfillApply: false,
    findings,
  }, null, 2));
  if (findings.length > 0) process.exitCode = 2;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
