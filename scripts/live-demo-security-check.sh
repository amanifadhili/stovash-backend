#!/usr/bin/env bash
# Security smoke checklist for demo API (read-only + auth negative cases).
set -euo pipefail

API_BASE="${API_BASE:-https://api.stovash.com}"
EMAIL="${E2E_EMAIL:-admin@stovash.local}"
PASSWORD="${E2E_PASSWORD:-admin123}"
FAIL=0
PASS=0

pass() { echo "PASS: $1"; PASS=$((PASS + 1)); }
fail() { echo "FAIL: $1"; FAIL=$((FAIL + 1)); }
warn() { echo "WARN: $1"; }

echo "=== Live demo security checklist: ${API_BASE} ==="

# Health
code=$(curl -sS -o /tmp/stovash-health.json -w '%{http_code}' "${API_BASE}/health")
if [[ "$code" == "200" ]]; then pass "GET /health -> 200"; else fail "GET /health -> ${code}"; fi

# Metrics exposure (document finding if public)
mcode=$(curl -sS -o /tmp/stovash-metrics.txt -w '%{http_code}' "${API_BASE}/metrics")
if [[ "$mcode" == "200" ]]; then
  warn "GET /metrics is PUBLIC (200) — track remediation"
else
  pass "GET /metrics not public (${mcode})"
fi

# Unauthenticated protected command
ucode=$(curl -sS -o /tmp/stovash-unauth.json -w '%{http_code}' "${API_BASE}/api" \
  -H 'Content-Type: application/json' \
  -d '{"command":"GetTenantShops","payload":{}}')
if [[ "$ucode" == "401" || "$ucode" == "403" ]]; then
  pass "GetTenantShops without token -> ${ucode}"
else
  fail "GetTenantShops without token -> ${ucode} (expected 401/403)"
fi

# Public login
login_body=$(curl -sS "${API_BASE}/api" \
  -H 'Content-Type: application/json' \
  -d "{\"command\":\"LoginUser\",\"payload\":{\"email\":\"${EMAIL}\",\"password\":\"${PASSWORD}\"}}")
login_status=$(echo "$login_body" | jq -r '.status // empty')
if [[ "$login_status" == "success" ]]; then
  pass "LoginUser -> success"
  TOKEN=$(echo "$login_body" | jq -r '.data.accessToken')
  TENANT_ID=$(echo "$login_body" | jq -r '.data.user.tenantId // empty')
else
  fail "LoginUser -> ${login_status:-error}"
  TOKEN=""
  TENANT_ID=""
fi

# Bad token
if [[ -n "$TOKEN" ]]; then
  bcode=$(curl -sS -o /tmp/stovash-badtoken.json -w '%{http_code}' "${API_BASE}/api" \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer not-a-valid-jwt' \
    -d '{"command":"GetTenantShops","payload":{}}')
  if [[ "$bcode" == "401" || "$bcode" == "403" ]]; then
    pass "Bad Bearer token -> ${bcode}"
  else
    fail "Bad Bearer token -> ${bcode} (expected 401/403)"
  fi
fi

# Authenticated read works
if [[ -n "$TOKEN" ]]; then
  shops=$(curl -sS "${API_BASE}/api" \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "X-Tenant-ID: ${TENANT_ID}" \
    -d '{"command":"GetTenantShops","payload":{}}')
  shops_status=$(echo "$shops" | jq -r '.status // empty')
  if [[ "$shops_status" == "success" ]]; then
    pass "GetTenantShops with admin token -> success"
    SHOP_ID=$(echo "$shops" | jq -r '.data[0].id // empty')
  else
    fail "GetTenantShops with admin token -> ${shops_status}"
    SHOP_ID=""
  fi
fi

# RBAC: admin-only command shape (CreateTreasuryMovement) — expect not 500
if [[ -n "$TOKEN" && -n "$SHOP_ID" ]]; then
  rbac=$(curl -sS -o /tmp/stovash-rbac.json -w '%{http_code}' "${API_BASE}/api" \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer ${TOKEN}" \
    -H "X-Tenant-ID: ${TENANT_ID}" \
    -H "X-Shop-ID: ${SHOP_ID}" \
    -d '{"command":"ApproveReconciliationAdjustment","payload":{}}')
  if [[ "$rbac" == "403" || "$rbac" == "400" || "$rbac" == "401" ]]; then
    pass "ApproveReconciliationAdjustment (admin token, empty payload) -> ${rbac} (not 500)"
  elif [[ "$rbac" == "500" ]]; then
    fail "ApproveReconciliationAdjustment -> 500"
  else
    pass "ApproveReconciliationAdjustment -> ${rbac}"
  fi
fi

# Swagger/docs reachable
dcode=$(curl -sS -o /dev/null -w '%{http_code}' "${API_BASE}/docs")
if [[ "$dcode" == "200" || "$dcode" == "301" || "$dcode" == "302" ]]; then
  pass "GET /docs -> ${dcode}"
else
  fail "GET /docs -> ${dcode}"
fi

# TLS
if curl -sS -I "${API_BASE}/health" 2>&1 | grep -qi 'HTTP/.* 200'; then
  pass "HTTPS TLS handshake OK"
else
  fail "HTTPS TLS handshake failed"
fi

echo ""
echo "=== Summary: ${PASS} passed, ${FAIL} failed ==="
if [[ "$FAIL" -gt 0 ]]; then exit 1; fi
