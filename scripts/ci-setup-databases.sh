#!/usr/bin/env bash
# Prepare Postgres databases for CI / local Jest suites.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export PGPASSWORD="${POSTGRES_PASSWORD:-postgres}"
HOST="${POSTGRES_HOST:-localhost}"
PORT="${POSTGRES_PORT:-5432}"
USER="${POSTGRES_USER:-postgres}"

DATABASES=(
  accounting_db
  treasury_db
  inventory_db
  sales_db
  purchase_db
  identity_db
  tenant_db
)

for db in "${DATABASES[@]}"; do
  exists="$(psql -h "$HOST" -p "$PORT" -U "$USER" -tAc "SELECT 1 FROM pg_database WHERE datname='${db}'" || true)"
  if [[ "$exists" != "1" ]]; then
    psql -h "$HOST" -p "$PORT" -U "$USER" -c "CREATE DATABASE ${db}"
  fi
done

export ACCOUNTING_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/accounting_db"
export TREASURY_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/treasury_db"
export INVENTORY_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/inventory_db"
export SALES_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/sales_db"
export PURCHASE_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/purchase_db"
export IDENTITY_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/identity_db"
export TENANT_DATABASE_URL="postgresql://${USER}:${PGPASSWORD}@${HOST}:${PORT}/tenant_db"
export RABBITMQ_URL="${RABBITMQ_URL:-amqp://localhost:5672}"
export JWT_SECRET="${JWT_SECRET:-dev-secret-key}"

SERVICES=(
  accounting-service
  treasury-service
  inventory-service
  sales-service
  purchase-service
  identity-service
  tenant-service
)

for svc in "${SERVICES[@]}"; do
  echo "Pushing schema: ${svc}"
  (cd "apps/${svc}" && npx prisma db push --accept-data-loss --skip-generate)
done

echo "Database setup complete."
