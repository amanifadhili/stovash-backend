-- Phase 7 calendar lock. Original rows stay immutable; corrections reference them.
-- Does not drop ledger / work_period / till tables.

ALTER TABLE "financial_transactions"
  ADD COLUMN IF NOT EXISTS "originalTransactionId" TEXT;

CREATE INDEX IF NOT EXISTS "financial_transactions_originalTransactionId_idx"
  ON "financial_transactions"("originalTransactionId");
