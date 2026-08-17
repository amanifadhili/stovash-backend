-- Phase 10: journals-by-day already indexed in 20260817_engine_ledger.sql.
-- Re-assert so a restored DB still has the covering index. Do not DROP legacy
-- ledger_accounts / journal_entries / work_periods here.

CREATE INDEX IF NOT EXISTS "posted_journals_tenantId_shopId_occurredOn_idx"
  ON "posted_journals"("tenantId", "shopId", "occurredOn");

CREATE UNIQUE INDEX IF NOT EXISTS "financial_transactions_tenantId_idempotencyKey_key"
  ON "financial_transactions"("tenantId", "idempotencyKey");
