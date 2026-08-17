#!/usr/bin/env bash
# Start the API from /home/deploy/stovash/backend/current
set -euo pipefail
cd "$(dirname "$0")/.."
export PORT="${PORT:-5051}"

if [[ -f dist/server.js ]]; then
  exec node dist/server.js
fi

if command -v npx >/dev/null 2>&1; then
  exec npx tsx server.ts
fi

exec npm run start
