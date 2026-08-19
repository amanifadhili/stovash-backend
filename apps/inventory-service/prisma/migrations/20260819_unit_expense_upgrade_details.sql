-- Unit expense details JSON + replay key on inventory upgrades.
ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS details JSONB;
ALTER TABLE inventory_upgrades ADD COLUMN IF NOT EXISTS "idempotencyKey" TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS inventory_upgrades_idempotencyKey_key ON inventory_upgrades ("idempotencyKey");
