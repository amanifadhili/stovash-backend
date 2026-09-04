#!/usr/bin/env bash
# Deploy backend using PM2 (no Docker)
# Called by GitHub Actions via native SSH.
#
# Usage: release-pm2.sh <artifact-path>
set -euo pipefail

ROOT="${STOVASH_ROOT:-/home/deploy/stovash/backend}"
ARTIFACT="${1:?artifact path required}"
KEEP="${KEEP_RELEASES:-3}"

echo "=== PM2 Deployment ==="
echo "ROOT: $ROOT"
echo "ARTIFACT: $ARTIFACT"

# --- Ensure directory structure exists ---
mkdir -p "$ROOT/shared" "$ROOT/releases"

# --- Create release directory ---
REL="$ROOT/releases/$(date -u +%Y%m%d%H%M%S)_pm2"
mkdir -p "$REL"

# --- Extract artifact ---
echo "Extracting artifact to $REL"
tar xzf "$ARTIFACT" -C "$REL"

# --- Install production dependencies ---
echo "Installing production dependencies..."
cd "$REL"
npm ci --omit=dev

# --- Stop existing PM2 process ---
echo "Stopping existing PM2 process..."
pm2 stop stovash-backend || true
pm2 delete stovash-backend || true

# --- Start new PM2 process ---
echo "Starting new PM2 process..."
pm2 start dist/server.js --name stovash-backend --env "$ROOT/shared/.env"

# --- Save PM2 configuration ---
pm2 save

# --- Update symlink ---
ln -sfn "$REL" "$ROOT/current"

# --- Cleanup old releases ---
mapfile -t old < <(ls -1dt "$ROOT/releases"/* 2>/dev/null | tail -n +"$((KEEP + 1))")
if ((${#old[@]})); then rm -rf "${old[@]}"; fi

# --- Status ---
echo "=== PM2 Status ==="
pm2 status

echo "=== Testing Backend ==="
curl -sf --connect-timeout 3 --max-time 5 "http://127.0.0.1:5051/docs" && echo "Backend is responding" || echo "Backend not responding yet"

echo "✅ PM2 deployment complete"
