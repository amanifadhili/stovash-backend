-- Phase 7 calendar-day snapshots. Totals are derived from treasury_movements, then stored.
-- Does not drop payment_methods / transfers / treasury_loans.

ALTER TABLE "treasury_movements"
  ADD COLUMN IF NOT EXISTS "originalMovementId" TEXT;

CREATE INDEX IF NOT EXISTS "treasury_movements_originalMovementId_idx"
  ON "treasury_movements"("originalMovementId");

CREATE TABLE IF NOT EXISTS "financial_periods" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "financial_periods_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "financial_periods_tenantId_shopId_date_key"
  ON "financial_periods"("tenantId", "shopId", "date");

CREATE TABLE IF NOT EXISTS "period_snapshots" (
  "id" TEXT NOT NULL,
  "periodId" TEXT NOT NULL,
  "scopeType" TEXT NOT NULL,
  "scopeKey" TEXT NOT NULL,
  "openingMinor" BIGINT NOT NULL,
  "inflowsMinor" BIGINT NOT NULL,
  "outflowsMinor" BIGINT NOT NULL,
  "adjustmentsMinor" BIGINT NOT NULL,
  "closingMinor" BIGINT NOT NULL,
  CONSTRAINT "period_snapshots_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "period_snapshots_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "financial_periods"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "period_snapshots_periodId_scopeType_scopeKey_key"
  ON "period_snapshots"("periodId", "scopeType", "scopeKey");

CREATE INDEX IF NOT EXISTS "period_snapshots_periodId_idx"
  ON "period_snapshots"("periodId");
