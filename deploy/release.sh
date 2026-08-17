#!/usr/bin/env bash
# Activate a new backend release under /home/deploy/stovash/backend
#
#   current -> releases/<this version>
#   current/shared -> ../../shared
#   current/.env   -> ../../shared/.env
# Keeps the 3 newest releases.
set -euo pipefail

ROOT="/home/deploy/stovash/backend"
RELEASE_DIR="${1:?release directory required}"
KEEP="${KEEP_RELEASES:-3}"

mkdir -p "$ROOT/shared"
rm -rf "$RELEASE_DIR/shared"
ln -sfn "$ROOT/shared" "$RELEASE_DIR/shared"
ln -sfn "$ROOT/shared/.env" "$RELEASE_DIR/.env"
chmod +x "$RELEASE_DIR/deploy/start.sh" 2>/dev/null || true
chown -R deploy:deploy "$RELEASE_DIR" "$ROOT/shared"

cd "$RELEASE_DIR"
sudo -u deploy -H bash -lc 'npm ci && npm run build' || sudo -u deploy -H bash -lc 'npm ci'

ln -sfn "$RELEASE_DIR" "$ROOT/current"
chown -h deploy:deploy "$ROOT/current"

if [[ -f "$RELEASE_DIR/deploy/systemd/stovash-backend.service" ]]; then
  cp "$RELEASE_DIR/deploy/systemd/stovash-backend.service" /etc/systemd/system/stovash-backend.service
  systemctl daemon-reload
  systemctl enable stovash-backend.service
fi

systemctl restart stovash-backend

mapfile -t old < <(ls -1dt "$ROOT/releases"/* 2>/dev/null | tail -n +"$((KEEP + 1))")
if ((${#old[@]})); then
  rm -rf "${old[@]}"
fi

echo "Backend current -> $RELEASE_DIR (kept $KEEP releases)"
