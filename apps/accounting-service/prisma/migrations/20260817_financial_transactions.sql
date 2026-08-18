-- Phase 2 financial engine: canonical FinancialTransaction table.
-- Does NOT drop or alter ledger_accounts, journal_entries, work_periods, or till tables.
-- Apply via prisma db push / this SQL. Amount is integer RWF cents (BIGINT).

CREATE TABLE IF NOT EXISTS "financial_transactions" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "occurredOn" DATE NOT NULL,
  "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "actorUserId" TEXT,
  "sourceDomain" TEXT NOT NULL,
  "sourceCommand" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL,
  "idempotencyKey" TEXT NOT NULL,
  "amountMinor" BIGINT NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'RWF',
  "description" TEXT,
  "reason" TEXT,
  "status" TEXT NOT NULL DEFAULT 'POSTED',
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdBy" TEXT,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "financial_transactions_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "financial_transactions_tenantId_idempotencyKey_key"
  ON "financial_transactions"("tenantId", "idempotencyKey");

CREATE INDEX IF NOT EXISTS "financial_transactions_tenantId_shopId_occurredOn_idx"
  ON "financial_transactions"("tenantId", "shopId", "occurredOn");

CREATE INDEX IF NOT EXISTS "financial_transactions_tenantId_sourceId_idx"
  ON "financial_transactions"("tenantId", "sourceId");
