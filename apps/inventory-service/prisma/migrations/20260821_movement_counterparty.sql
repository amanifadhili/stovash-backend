-- Activity "With" column: denormalized party on stock movements
ALTER TABLE inventory_movements
  ADD COLUMN IF NOT EXISTS "counterpartyName" TEXT,
  ADD COLUMN IF NOT EXISTS "counterpartyPhone" TEXT;
