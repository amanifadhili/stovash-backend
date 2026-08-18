-- Phase 4 engine ledger. Does not drop ledger_accounts / journal_entries / work_periods.
-- Amounts are integer RWF cents. No stored SoT balance on chart_accounts.

CREATE TABLE IF NOT EXISTS "chart_accounts" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "fundCode" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "chart_accounts_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "chart_accounts_tenantId_shopId_code_key"
  ON "chart_accounts"("tenantId", "shopId", "code");

CREATE INDEX IF NOT EXISTS "chart_accounts_tenantId_shopId_type_idx"
  ON "chart_accounts"("tenantId", "shopId", "type");

CREATE TABLE IF NOT EXISTS "posted_journals" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "financialTransactionId" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'POSTED',
  "postedBy" TEXT NOT NULL,
  "occurredOn" DATE NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "posted_journals_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "posted_journals_financialTransactionId_key"
  ON "posted_journals"("financialTransactionId");

CREATE INDEX IF NOT EXISTS "posted_journals_tenantId_shopId_occurredOn_idx"
  ON "posted_journals"("tenantId", "shopId", "occurredOn");

CREATE TABLE IF NOT EXISTS "posted_journal_lines" (
  "id" TEXT NOT NULL,
  "journalId" TEXT NOT NULL,
  "accountId" TEXT NOT NULL,
  "side" TEXT NOT NULL,
  "amountMinor" BIGINT NOT NULL,
  CONSTRAINT "posted_journal_lines_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "posted_journal_lines_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "posted_journals"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "posted_journal_lines_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "chart_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "posted_journal_lines_journalId_idx" ON "posted_journal_lines"("journalId");
CREATE INDEX IF NOT EXISTS "posted_journal_lines_accountId_idx" ON "posted_journal_lines"("accountId");

CREATE TABLE IF NOT EXISTS "obligations" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "partyName" TEXT NOT NULL,
  "outstandingMinor" BIGINT NOT NULL,
  "financialTransactionId" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'OPEN',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "obligations_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "obligations_tenantId_shopId_kind_idx" ON "obligations"("tenantId", "shopId", "kind");
CREATE INDEX IF NOT EXISTS "obligations_financialTransactionId_idx" ON "obligations"("financialTransactionId");

CREATE TABLE IF NOT EXISTS "profit_allocations" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "earnedMinor" BIGINT NOT NULL DEFAULT 0,
  "transferredMinor" BIGINT NOT NULL DEFAULT 0,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "profit_allocations_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "profit_allocations_tenantId_shopId_key"
  ON "profit_allocations"("tenantId", "shopId");
