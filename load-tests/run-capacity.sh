#!/usr/bin/env bash
# Run k6 capacity suite against local demo stack. Never point at production.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/load-tests"
mkdir -p results

: "${API_BASE:=http://127.0.0.1:3001}"
: "${API_TOKEN:?Set API_TOKEN from seed:demo login}"
: "${SHOP_ID:?Set SHOP_ID}"
: "${TENANT_ID:?Set TENANT_ID}"

if ! command -v k6 >/dev/null 2>&1; then
  echo "k6 not installed. Install from https://k6.io/docs/get-started/installation/"
  exit 1
fi

echo "Running load test against ${API_BASE} (local only)"
k6 run load.js
k6 run stress.js
k6 run spike.js

if [[ "${RUN_SOAK:-0}" == "1" ]]; then
  k6 run soak.js
else
  echo "Skipping soak (set RUN_SOAK=1 for 30m run)"
fi

echo "Results in load-tests/results/"
