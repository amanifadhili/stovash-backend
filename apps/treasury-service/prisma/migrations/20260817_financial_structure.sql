-- Phase 3: logical funds + physical accounts. No stored SoT balance column.
-- Does not drop or alter payment_methods / transfers / loans.

CREATE TABLE IF NOT EXISTS "logical_funds" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'RWF',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "logical_funds_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "logical_funds_tenantId_shopId_code_key"
  ON "logical_funds"("tenantId", "shopId", "code");

CREATE INDEX IF NOT EXISTS "logical_funds_tenantId_shopId_idx"
  ON "logical_funds"("tenantId", "shopId");

CREATE TABLE IF NOT EXISTS "physical_accounts" (
  "id" TEXT NOT NULL,
  "tenantId" TEXT NOT NULL,
  "shopId" TEXT NOT NULL,
  "fundId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "currency" TEXT NOT NULL DEFAULT 'RWF',
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdBy" TEXT,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "physical_accounts_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "physical_accounts_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "logical_funds"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "physical_accounts_tenantId_shopId_code_key"
  ON "physical_accounts"("tenantId", "shopId", "code");

CREATE INDEX IF NOT EXISTS "physical_accounts_tenantId_shopId_idx"
  ON "physical_accounts"("tenantId", "shopId");

CREATE INDEX IF NOT EXISTS "physical_accounts_fundId_idx"
  ON "physical_accounts"("fundId");

CREATE INDEX IF NOT EXISTS "physical_accounts_kind_idx"
  ON "physical_accounts"("kind");

-- Mandatory kinds are unique per shop. Extra Operational banks (OPS_OTHER_BANK) may repeat.
CREATE UNIQUE INDEX IF NOT EXISTS "physical_accounts_mandatory_kind_key"
  ON "physical_accounts"("tenantId", "shopId", "kind")
  WHERE "kind" IN ('CAPITAL_BANK', 'PETTY_CASH', 'OPS_MAIN_BANK', 'OPS_CASH', 'OPS_MOMO', 'PROFIT_BANK');
