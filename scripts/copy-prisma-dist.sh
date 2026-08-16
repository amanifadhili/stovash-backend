#!/usr/bin/env bash
# Copy Prisma client from src/generated/prisma → dist/generated/prisma
# so Nest's compiled dist/database/client.js can resolve ../generated/prisma.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SVC="${1:-}"
if [[ -z "$SVC" ]]; then
  echo "Usage: $0 <service-dir-name>" >&2
  exit 1
fi
SRC="$ROOT/apps/$SVC/src/generated/prisma"
DST_DIR="$ROOT/apps/$SVC/dist/generated"
DST="$DST_DIR/prisma"
if [[ ! -d "$SRC" ]]; then
  echo "Missing $SRC — run: (cd apps/$SVC && npx prisma generate)" >&2
  exit 1
fi
mkdir -p "$DST_DIR"
rm -rf "$DST"
cp -a "$SRC" "$DST"
echo "Synced prisma client → apps/$SVC/dist/generated/prisma"
