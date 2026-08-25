#!/usr/bin/env bash
# Create deploy user + /home/deploy/stovash/{backend,frontend}/{releases,shared}.
# `current` is a symlink created by release.sh on first GitHub deploy.
# Run as root on the new VPS. Do not store the deploy password in git.
set -euo pipefail

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root."
  exit 1
fi

id deploy >/dev/null 2>&1 || useradd --create-home --shell /bin/bash deploy
usermod -aG docker deploy 2>/dev/null || true
usermod -aG sudo deploy || true

ROOT="/home/deploy/stovash"
mkdir -p \
  "$ROOT/backend/releases" "$ROOT/backend/shared" \
  "$ROOT/frontend/releases" "$ROOT/frontend/shared"

if [[ -f /var/tmp/stovash-cutover/env/backend.env ]]; then
  install -m 640 -o deploy -g deploy \
    /var/tmp/stovash-cutover/env/backend.env "$ROOT/backend/shared/.env"
fi
if [[ -f /var/tmp/stovash-cutover/env/frontend.env ]]; then
  install -m 640 -o deploy -g deploy \
    /var/tmp/stovash-cutover/env/frontend.env "$ROOT/frontend/shared/.env"
fi

if [[ ! -f "$ROOT/frontend/shared/.env" ]]; then
  cat > "$ROOT/frontend/shared/.env" <<'EOF'
NEXT_PUBLIC_API_URL=https://api.stovash.com
PORT=5050
NODE_VERSION=22-alpine
EOF
fi

chown -R deploy:deploy /home/deploy/stovash
chmod 750 /home/deploy/stovash
chmod 640 "$ROOT/backend/shared/.env" 2>/dev/null || true
chmod 640 "$ROOT/frontend/shared/.env" 2>/dev/null || true

echo "Layout ready:"
find "$ROOT" -maxdepth 3 -print | sort
echo "shared .env present: backend=$([[ -f $ROOT/backend/shared/.env ]] && echo yes || echo NO) frontend=$([[ -f $ROOT/frontend/shared/.env ]] && echo yes || echo NO)"
