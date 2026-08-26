#!/usr/bin/env bash
# Create demo layout, demo Postgres DBs, and demo .env on the VPS.
# Live production dirs are not modified.
# Run as root on contabo1.
set -euo pipefail

LIVE_ENV="/home/deploy/stovash/backend/shared/.env"
DEMO_ROOT="/home/deploy/stovash-demo"
BE_SHARED="$DEMO_ROOT/backend/shared"
FE_SHARED="$DEMO_ROOT/frontend/shared"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root."
  exit 1
fi
if [[ ! -f "$LIVE_ENV" ]]; then
  echo "Missing live env $LIVE_ENV"
  exit 1
fi

mkdir -p \
  "$DEMO_ROOT/backend/releases" "$BE_SHARED" \
  "$DEMO_ROOT/frontend/releases" "$FE_SHARED"

# Copy live env and point every *_db URL at *_db_demo
python3 - "$LIVE_ENV" "$BE_SHARED/.env" <<'PY'
import re, sys
src, dst = sys.argv[1], sys.argv[2]
text = open(src).read()
dbs = [
  "electronic_shop", "identity_db", "tenant_db", "customer_db", "supplier_db",
  "accounting_db", "inventory_db", "sales_db", "purchase_db", "treasury_db", "report_db",
]
for db in dbs:
    text = re.sub(rf"/{db}(?![_a-z])", f"/{db}_demo", text)
text = re.sub(r"^PORT=.*$", "PORT=5061", text, flags=re.M)
text = re.sub(r"^CORS_ORIGINS=.*$", "CORS_ORIGINS=https://demo.stovash.com", text, flags=re.M)
text = re.sub(r"^CORS_ORIGINS=.*$", "CORS_ORIGINS=https://demo.stovash.com", text, flags=re.M)
if "CORS_ORIGINS=" not in text:
    text += "\nCORS_ORIGINS=https://demo.stovash.com\n"
open(dst, "w").write(text)
PY

cat > "$FE_SHARED/.env" <<'EOF'
NEXT_PUBLIC_API_URL=https://api.demo.stovash.com
PORT=5060
NODE_VERSION=22-alpine
EOF

# Create empty demo databases owned by stovash (same role as live)
for db in electronic_shop_demo identity_db_demo tenant_db_demo customer_db_demo supplier_db_demo \
           accounting_db_demo inventory_db_demo sales_db_demo purchase_db_demo treasury_db_demo report_db_demo; do
  sudo -u postgres psql -v ON_ERROR_STOP=1 -c "SELECT 1 FROM pg_database WHERE datname='$db'" | grep -q 1 \
    || sudo -u postgres psql -v ON_ERROR_STOP=1 -c "CREATE DATABASE $db OWNER stovash;"
  echo "db $db ok"
done

chown -R deploy:deploy "$DEMO_ROOT"
chmod 640 "$BE_SHARED/.env" "$FE_SHARED/.env"

echo "Demo layout ready at $DEMO_ROOT"
echo "Backend PORT=5061  Frontend bind 127.0.0.1:5060"
echo "After first demo backend deploy: docker exec stovash-demo-backend npm run seed:demo"
