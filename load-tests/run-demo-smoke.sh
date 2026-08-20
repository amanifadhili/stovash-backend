#!/usr/bin/env bash
# Short k6 smoke against demo API (safe for stovash demo VPS).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/load-tests"
mkdir -p results

: "${API_BASE:=https://api.stovash.com}"
: "${K6_EMAIL:=admin@stovash.local}"
: "${K6_PASSWORD:=admin123}"

if ! command -v k6 >/dev/null 2>&1; then
  echo "Installing k6 via snap (requires sudo) or apt..."
  if command -v snap >/dev/null 2>&1; then
    sudo snap install k6 2>/dev/null || true
  fi
fi

if ! command -v k6 >/dev/null 2>&1; then
  echo "k6 not installed. See https://k6.io/docs/get-started/installation/"
  exit 1
fi

echo "Demo smoke load: ${API_BASE} (5 VUs, 2m)"
k6 run \
  -e API_BASE="${API_BASE}" \
  -e K6_EMAIL="${K6_EMAIL}" \
  -e K6_PASSWORD="${K6_PASSWORD}" \
  demo-smoke.js

echo "Summary: load-tests/results/demo-smoke-summary.json"
