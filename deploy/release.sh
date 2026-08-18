#!/usr/bin/env bash
# Activate a backend release with Docker. Host Node/nvm is not used.
#
#   current -> releases/<this version>
#   nginx -> 127.0.0.1:5051 -> container :5051
# Keeps the 3 newest releases.
set -euo pipefail

ROOT="/home/deploy/stovash/backend"
RELEASE_DIR="${1:?release directory required}"
KEEP="${KEEP_RELEASES:-3}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ -f "$SCRIPT_DIR/ensure-docker.sh" ]]; then
  bash "$SCRIPT_DIR/ensure-docker.sh"
fi

mkdir -p "$ROOT/shared"
if [[ ! -f "$ROOT/shared/.env" ]]; then
  echo "Missing $ROOT/shared/.env — copy production env before deploy."
  exit 1
fi

rm -rf "$RELEASE_DIR/shared"
ln -sfn "$ROOT/shared" "$RELEASE_DIR/shared"
ln -sfn "$ROOT/shared/.env" "$RELEASE_DIR/.env"

export RELEASE_ID
RELEASE_ID="$(basename "$RELEASE_DIR")"
# Do not `source` shared/.env — values like APP_NAME=Electronic Shop break bash.
export NODE_VERSION="${NODE_VERSION:-22-bookworm-slim}"
export PORT="${PORT:-5051}"

cd "$RELEASE_DIR"
# Build while the old container still serves traffic, then replace it.
# A leftover container from a different compose project cannot be recreated by name.
docker-compose --env-file "$ROOT/shared/.env" -p stovash-backend build
docker rm -f stovash-backend >/dev/null 2>&1 || true
docker-compose --env-file "$ROOT/shared/.env" -p stovash-backend up -d --no-build --remove-orphans --force-recreate

# Image build does not apply schema. Sync each service DB (additive; fails on data-loss).
echo "Syncing Prisma schemas..."
for svc in identity tenant customer supplier accounting inventory sales purchase treasury report; do
  docker exec stovash-backend bash -lc "cd /app/apps/${svc}-service && /app/node_modules/.bin/prisma db push --skip-generate --schema=prisma/schema.prisma"
done

ln -sfn "$RELEASE_DIR" "$ROOT/current"
chown -h deploy:deploy "$ROOT/current" 2>/dev/null || true

mapfile -t old < <(ls -1dt "$ROOT/releases"/* 2>/dev/null | tail -n +"$((KEEP + 1))")
if ((${#old[@]})); then
  rm -rf "${old[@]}"
fi

docker image prune -f >/dev/null 2>&1 || true
docker-compose -p stovash-backend ps
systemctl disable --now stovash-backend.service 2>/dev/null || true
echo "Backend current -> $RELEASE_DIR (docker, kept $KEEP releases)"
