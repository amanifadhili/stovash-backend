#!/usr/bin/env bash
# k6 capacity ramp for demo API: 20 → 50 → 100 VUs (~10 min).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/load-tests"
mkdir -p results

: "${API_BASE:=https://api.stovash.com}"
: "${K6_EMAIL:=admin@stovash.local}"
: "${K6_PASSWORD:=admin123}"

K6_BIN="${K6_BIN:-$(command -v k6 || true)}"
if [[ -z "$K6_BIN" && -x "$ROOT/../.tools/k6" ]]; then
  K6_BIN="$ROOT/../.tools/k6"
fi
if [[ -z "$K6_BIN" ]]; then
  echo "k6 not found. Set K6_BIN or install k6."
  exit 1
fi

echo "Demo ramp load: ${API_BASE} (20→50→100 VUs, ~10 min)"
"$K6_BIN" run \
  -e API_BASE="${API_BASE}" \
  -e K6_EMAIL="${K6_EMAIL}" \
  -e K6_PASSWORD="${K6_PASSWORD}" \
  demo-ramp.js

echo "Summary: results/demo-ramp-summary.json"
