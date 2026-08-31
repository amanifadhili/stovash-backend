-- Migration: Reclassify Petty Cash (1150) under PROFIT_RESERVE fund
-- Date: 2026-08-31

UPDATE "physical_accounts" pa
SET "fund_id" = lf."id"
FROM "logical_funds" lf
WHERE pa."kind" = 'PETTY_CASH'
  AND lf."code" = 'PROFIT_RESERVE'
  AND pa."tenant_id" = lf."tenant_id"
  AND pa."shop_id" = lf."shop_id"
  AND pa."fund_id" != lf."id";
