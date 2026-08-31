#!/usr/bin/env bash
# Install Docker Engine + docker-compose (standalone binary) if missing.
# Configure Docker to prefer IPv4 (fixes GHCR pull failures on broken IPv6).
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  apt-get update
  apt-get install -y ca-certificates curl
  curl -fsSL https://get.docker.com | sh
  id deploy >/dev/null 2>&1 && usermod -aG docker deploy || true
fi

if ! command -v docker-compose >/dev/null 2>&1; then
  apt-get update
  apt-get install -y ca-certificates curl
  curl -fsSL "https://github.com/docker/compose/releases/download/v2.29.7/docker-compose-linux-$(uname -m)" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  ln -sfn /usr/local/bin/docker-compose /usr/bin/docker-compose
fi

# Force Docker to prefer IPv4 (fixes GHCR connection reset on broken IPv6)
DOCKER_DAEMON_JSON="/etc/docker/daemon.json"
if [[ -f "$DOCKER_DAEMON_JSON" ]]; then
  if ! grep -q '"ip"' "$DOCKER_DAEMON_JSON"; then
    # Add ip binding if not already set
    python3 -c "
import json
with open('$DOCKER_DAEMON_JSON') as f:
    cfg = json.load(f)
cfg.setdefault('ip', '0.0.0.0')
with open('$DOCKER_DAEMON_JSON', 'w') as f:
    json.dump(cfg, f, indent=2)
" 2>/dev/null || {
      # Fallback: use jq if python3 not available
      cp "$DOCKER_DAEMON_JSON" "${DOCKER_DAEMON_JSON}.bak"
      cat "$DOCKER_DAEMON_JSON" | sed 's/{/{\n  "ip": "0.0.0.0",/' > "${DOCKER_DAEMON_JSON}.tmp"
      mv "${DOCKER_DAEMON_JSON}.tmp" "$DOCKER_DAEMON_JSON"
    }
    systemctl restart docker 2>/dev/null || true
    sleep 3
  fi
else
  echo '{"ip": "0.0.0.0"}' > "$DOCKER_DAEMON_JSON"
  systemctl restart docker 2>/dev/null || true
  sleep 3
fi

docker --version
docker-compose version
