#!/usr/bin/env bash
# Activate a backend release with Docker. Host Node/nvm is not used.
#
#   current -> releases/<this version>
#   nginx -> 127.0.0.1:5051 -> container :5051
# Keeps the 3 newest releases.
set -euo pipefail

ROOT="${STOVASH_ROOT:-/home/deploy/stovash/backend}"
RELEASE_DIR="${1:?release directory required}"
KEEP="${KEEP_RELEASES:-3}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_PROJECT="${STOVASH_COMPOSE_PROJECT:-stovash-backend}"
export COMPOSE_IMAGE="${STOVASH_IMAGE:-stovash-backend}"
export COMPOSE_CONTAINER="${STOVASH_CONTAINER:-stovash-backend}"
export ENV_FILE="${STOVASH_ENV_FILE:-$ROOT/shared/.env}"
export STOVASH_PORT="${STOVASH_PORT:-5051}"
export PORT="${STOVASH_PORT}"

if [[ -f "$SCRIPT_DIR/ensure-docker.sh" ]]; then
  bash "$SCRIPT_DIR/ensure-docker.sh"
fi

mkdir -p "$ROOT/shared" "$ROOT/releases"
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
export PORT="${STOVASH_PORT:-5051}"

cd "$RELEASE_DIR"
# Build while the old container still serves traffic, then replace it.
# A leftover container from a different compose project cannot be recreated by name.
# Disable BuildKit to avoid "frontend grpc server closed unexpectedly" on the VPS.
DOCKER_BUILDKIT=0 COMPOSE_DOCKER_CLI_BUILD=0 docker-compose --env-file "$ROOT/shared/.env" -p "$COMPOSE_PROJECT" build
docker rm -f "$COMPOSE_CONTAINER" >/dev/null 2>&1 || true
docker-compose --env-file "$ROOT/shared/.env" -p "$COMPOSE_PROJECT" up -d --no-build --remove-orphans --force-recreate

ln -sfn "$RELEASE_DIR" "$ROOT/current"
chown -h deploy:deploy "$ROOT/current" 2>/dev/null || true

# Schema sync after the container is already serving. DBs were restored on cutover;
# this is additive. Do not block traffic if GitHub SSH times out here.
echo "Preflight: inventory_upgrades.idempotencyKey unique..."
docker exec "$COMPOSE_CONTAINER" node /app/apps/inventory-service/scripts/ensure-upgrade-idempotency-unique.cjs

echo "Syncing Prisma schemas..."
for svc in identity tenant customer supplier accounting inventory sales purchase treasury report; do
  echo "  prisma db push ${svc}-service"
  docker exec "$COMPOSE_CONTAINER" bash -lc "cd /app/apps/${svc}-service && /app/node_modules/.bin/prisma db push --skip-generate --schema=prisma/schema.prisma"
done

mapfile -t old < <(ls -1dt "$ROOT/releases"/* 2>/dev/null | tail -n +"$((KEEP + 1))")
if ((${#old[@]})); then
  rm -rf "${old[@]}"
fi

docker image prune -f >/dev/null 2>&1 || true
docker-compose -p "$COMPOSE_PROJECT" ps
systemctl disable --now stovash-backend.service 2>/dev/null || true
echo "Backend current -> $RELEASE_DIR (docker, kept $KEEP releases)"
