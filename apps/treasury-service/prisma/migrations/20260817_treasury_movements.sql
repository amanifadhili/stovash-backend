-- Phase 5 treasury movements. Does not drop payment_methods / transfers / treasury_loans.
-- Amounts are integer RWF cents. Physical balances are derived, never stored.

CREATE TABLE IF NOT EXISTS "treasury_movements" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "movementType" TEXT NOT NULL,
  "fromPhysicalId" TEXT,
  "toPhysicalId" TEXT,
  "amountMinor" BIGINT NOT NULL,
  "financialTransactionId" TEXT NOT NULL,
  "journalId" TEXT,
  "occurredOn" DATE NOT NULL,
  "idempotencyKey" TEXT NOT NULL,
  "reason" TEXT,
  "notes" TEXT,
  "createdBy" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "treasury_movements_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "treasury_movements_fromPhysicalId_fkey" FOREIGN KEY ("fromPhysicalId") REFERENCES "physical_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "treasury_movements_toPhysicalId_fkey" FOREIGN KEY ("toPhysicalId") REFERENCES "physical_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "treasury_movements_tenantId_idempotencyKey_key"
  ON "treasury_movements"("tenantId", "idempotencyKey");

CREATE INDEX IF NOT EXISTS "treasury_movements_tenantId_shopId_occurredOn_idx"
  ON "treasury_movements"("tenantId", "shopId", "occurredOn");

CREATE INDEX IF NOT EXISTS "treasury_movements_financialTransactionId_idx"
  ON "treasury_movements"("financialTransactionId");

CREATE TABLE IF NOT EXISTS "treasury_obligations" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "lenderFundCode" TEXT,
  "borrowerFundCode" TEXT,
  "partyName" TEXT NOT NULL,
  "outstandingMinor" BIGINT NOT NULL,
  "financialTransactionId" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'OPEN',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "treasury_obligations_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "treasury_obligations_tenantId_shopId_kind_idx"
  ON "treasury_obligations"("tenantId", "shopId", "kind");

CREATE INDEX IF NOT EXISTS "treasury_obligations_financialTransactionId_idx"
  ON "treasury_obligations"("financialTransactionId");

CREATE TABLE IF NOT EXISTS "reconciliation_counts" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "physicalAccountId" TEXT NOT NULL,
  "expectedMinor" BIGINT NOT NULL,
  "countedMinor" BIGINT NOT NULL,
  "differenceMinor" BIGINT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'COUNTED',
  "countedBy" TEXT NOT NULL,
  "notes" TEXT,
  "reason" TEXT,
  "approvedBy" TEXT,
  "approvedAt" TIMESTAMP(3),
  "adjustmentMovementId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "reconciliation_counts_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "reconciliation_counts_physicalAccountId_fkey" FOREIGN KEY ("physicalAccountId") REFERENCES "physical_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "reconciliation_counts_tenantId_shopId_status_idx"
  ON "reconciliation_counts"("tenantId", "shopId", "status");

CREATE INDEX IF NOT EXISTS "reconciliation_counts_physicalAccountId_idx"
  ON "reconciliation_counts"("physicalAccountId");
