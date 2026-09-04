#!/usr/bin/env bash
# Deploy a pre-built GHCR image to production.
# Called by GitHub Actions via native SSH.
#
# Usage: release-ghcr.sh <image> <tag>
# Example: release-ghcr.sh ghcr.io/amanifadhili/stovash-backend e1e2102
set -euo pipefail

# Explicitly set backend defaults to prevent environment conflicts
ROOT="${STOVASH_ROOT:-/home/deploy/stovash/backend}"
IMAGE="${1:?image required (e.g. ghcr.io/amanifadhili/stovash-backend)}"
TAG="${2:?tag required (e.g. e1e2102)}"
KEEP="${KEEP_RELEASES:-3}"
COMPOSE_PROJECT="${STOVASH_COMPOSE_PROJECT:-stovash-backend}"
CONTAINER="${STOVASH_CONTAINER:-stovash-backend}"
ENV_FILE="${ROOT}/shared/.env"
PORT="${STOVASH_PORT:-5051}"

# Debug: Verify we're using backend configuration
echo "=== CRITICAL DEBUG: Backend deployment script ==="
echo "=== CRITICAL DEBUG: ROOT=$ROOT"
echo "=== CRITICAL DEBUG: IMAGE=$IMAGE"
echo "=== CRITICAL DEBUG: TAG=$TAG"
echo "=== CRITICAL DEBUG: CONTAINER=$CONTAINER"
echo "=== CRITICAL DEBUG: PORT=$PORT"
echo "=== CRITICAL DEBUG: COMPOSE_PROJECT=$COMPOSE_PROJECT"

# Safety check: Prevent deploying frontend image
if [[ "$IMAGE" == *"frontend"* ]]; then
  echo "=== CRITICAL ERROR: Attempting to deploy frontend image in backend script!"
  echo "=== CRITICAL ERROR: IMAGE=$IMAGE"
  exit 1
fi

# --- Ensure Docker is available ---
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f "$SCRIPT_DIR/ensure-docker.sh" ]]; then
  bash "$SCRIPT_DIR/ensure-docker.sh"
fi

# --- Ensure directory structure exists ---
mkdir -p "$ROOT/shared" "$ROOT/releases"

# --- Preflight ---
if [[ ! -f "$ENV_FILE" ]]; then
  echo "ERROR: Missing $ENV_FILE"
  echo "Copy your production .env to $ROOT/shared/.env before deploying."
  exit 1
fi

# --- Authenticate to GHCR ---
# GHCR_USER and GHCR_TOKEN are passed as env vars from GitHub Actions
if [[ -n "${GHCR_USER:-}" && -n "${GHCR_TOKEN:-}" ]]; then
  echo "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_USER" --password-stdin
else
  echo "WARNING: GHCR_USER/GHCR_TOKEN not set, assuming already authenticated."
fi

# --- Pull the exact image with retry ---
FULL_IMAGE="${IMAGE}:${TAG}"
echo "=== DEBUG: Full image to pull: ${FULL_IMAGE}"
echo "=== DEBUG: Container name: ${CONTAINER}"
echo "=== DEBUG: Port: ${PORT}"
echo "=== DEBUG: Compose project: ${COMPOSE_PROJECT}"
echo "=== TIMING: Starting image pull at $(date '+%Y-%m-%d %H:%M:%S')"
echo "Pulling ${FULL_IMAGE}..."

for i in 1 2 3 4 5; do
  if docker pull "$FULL_IMAGE" 2>&1; then
    echo "=== TIMING: Image pull completed at $(date '+%Y-%m-%d %H:%M:%S')"
    echo "Pull succeeded on attempt $i"
    break
  fi
  if [[ $i -eq 5 ]]; then
    echo "ERROR: Failed to pull $FULL_IMAGE after 5 attempts"
    exit 1
  fi
  WAIT=$((i * 15))
  echo "Pull failed, retrying in ${WAIT}s... (attempt $i/5)"
  sleep "$WAIT"
done

# --- Create release directory ---
REL="$ROOT/releases/$(date -u +%Y%m%d%H%M%S)_${TAG}"
mkdir -p "$REL" "$ROOT/shared"

# --- Write docker-compose.yml ---
cat > "$ROOT/docker-compose.yml" <<EOF
services:
  api:
    image: ${FULL_IMAGE}
    container_name: ${CONTAINER}
    restart: unless-stopped
    network_mode: host
    env_file:
      - ${ENV_FILE}
    environment:
      NODE_ENV: production
      PORT: "${PORT}"
EOF
echo "=== DEBUG: docker-compose.yml written with image: ${FULL_IMAGE}"
echo "=== DEBUG: docker-compose.yml written with container: ${CONTAINER}"

# --- Stop old container, start new one ---
echo "=== TIMING: Starting container operations at $(date '+%Y-%m-%d %H:%M:%S')"
echo "Removing old container ${CONTAINER}..."
timeout 30 docker rm -f "$CONTAINER" >/dev/null 2>&1 || true
echo "=== DEBUG: About to start container with image: ${FULL_IMAGE}"
echo "=== DEBUG: Container name will be: ${CONTAINER}"
echo "Starting new container..."
timeout 120 docker compose -f "$ROOT/docker-compose.yml" -p "$COMPOSE_PROJECT" up -d --no-build --force-recreate
echo "=== TIMING: Container started at $(date '+%Y-%m-%d %H:%M:%S')"
echo "=== DEBUG: Container status after start:"
docker ps -a --filter "name=${CONTAINER}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
sleep 2
echo "Container status:"
docker ps -a --filter "name=${CONTAINER}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# --- Wait for API to be healthy (max 90s) ---
echo "=== TIMING: Starting health check at $(date '+%Y-%m-%d %H:%M:%S')"
echo "Waiting for API to be ready on port ${PORT}..."
for i in $(seq 1 18); do
  sleep 5
  if curl -sf --connect-timeout 3 --max-time 5 "http://127.0.0.1:${PORT}/docs" >/dev/null 2>&1; then
    echo "=== TIMING: Health check passed at $(date '+%Y-%m-%d %H:%M:%S')"
    echo "API is up on port ${PORT}"
    break
  fi
  if [[ $i -eq 18 ]]; then
    echo "WARNING: API not responding on port ${PORT} after 90s"
    docker compose -f "$ROOT/docker-compose.yml" -p "$COMPOSE_PROJECT" logs --tail=100 || true
    docker logs --tail=50 "$CONTAINER" 2>&1 || true
  fi
done

# --- Schema sync (with per-service hard timeout to avoid hanging deploy) ---
echo "=== TIMING: Starting Prisma schema sync at $(date '+%Y-%m-%d %H:%M:%S')"
echo "Syncing Prisma schemas..."
for svc in identity tenant customer supplier accounting inventory sales purchase treasury report; do
  echo "  prisma db push ${svc}-service"
  timeout --kill-after=10 90 docker exec "$CONTAINER" bash -lc \
    "cd /app/apps/${svc}-service && /app/node_modules/.bin/prisma db push --skip-generate --schema=prisma/schema.prisma" >/dev/null 2>&1 || echo "  (skip/timeout for $svc)"
done
echo "=== TIMING: Prisma schema sync completed at $(date '+%Y-%m-%d %H:%M:%S')"

# --- Symlink current ---
ln -sfn "$REL" "$ROOT/current"
echo "$FULL_IMAGE" > "$ROOT/shared/deployed-image"
echo "Deployed ${FULL_IMAGE}"

# --- Cleanup old images (keep last $KEEP) ---
mapfile -t old_images < <(docker images "$IMAGE" --format '{{.Tag}}' | grep -v latest | sort -r | tail -n +"$((KEEP + 1))")
for img in "${old_images[@]}"; do
  timeout 60 docker rmi "${IMAGE}:${img}" 2>/dev/null || true
done

# --- Cleanup old releases ---
mapfile -t old < <(ls -1dt "$ROOT/releases"/* 2>/dev/null | tail -n +"$((KEEP + 1))")
if ((${#old[@]})); then rm -rf "${old[@]}"; fi

# --- Status ---
docker compose -f "$ROOT/docker-compose.yml" -p "$COMPOSE_PROJECT" ps
echo "✅ ${FULL_IMAGE} deployed successfully"
