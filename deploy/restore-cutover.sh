#!/usr/bin/env bash
# Restore STOVASH dumps + env on the NEW VPS.
# Expects /var/tmp/stovash-cutover/{dumps,env} from the old server.
set -euo pipefail

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root."
  exit 1
fi

SRC="${1:-/var/tmp/stovash-cutover}"
BACKEND_SHARED="/home/deploy/stovash/backend/shared"
FRONTEND_SHARED="/home/deploy/stovash/frontend/shared"

[[ -d "$SRC/dumps" ]] || { echo "Missing $SRC/dumps"; exit 1; }
[[ -f "$SRC/env/backend.env" ]] || { echo "Missing $SRC/env/backend.env"; exit 1; }

install -d -o deploy -g deploy -m 755 "$BACKEND_SHARED" "$FRONTEND_SHARED"
install -m 640 -o deploy -g deploy "$SRC/env/backend.env" "$BACKEND_SHARED/.env"
if [[ -f "$SRC/env/frontend.env" ]]; then
  install -m 640 -o deploy -g deploy "$SRC/env/frontend.env" "$FRONTEND_SHARED/.env"
fi

if [[ -f "$SRC/env/stovash-role.sql" ]]; then
  sudo -u postgres psql -v ON_ERROR_STOP=1 -f "$SRC/env/stovash-role.sql"
else
  echo "No stovash-role.sql — create role manually before restore."
  exit 1
fi

DBS=(
  electronic_shop
  identity_db
  tenant_db
  customer_db
  supplier_db
  accounting_db
  inventory_db
  sales_db
  purchase_db
  treasury_db
  report_db
)

for db in "${DBS[@]}"; do
  dump="$SRC/dumps/${db}.dump"
  [[ -f "$dump" ]] || { echo "Missing dump $dump"; exit 1; }
  sudo -u postgres psql -v ON_ERROR_STOP=1 -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$db' AND pid <> pg_backend_pid();" >/dev/null || true
  sudo -u postgres psql -c "DROP DATABASE IF EXISTS $db;"
  sudo -u postgres psql -v ON_ERROR_STOP=1 -c "CREATE DATABASE $db OWNER stovash;"
  sudo -u postgres pg_restore --no-owner --role=stovash -d "$db" "$dump" || true
  echo "restored $db"
done

echo "Env + databases restored. Next: copy a release into backend/frontend and run deploy/release.sh"
