#!/usr/bin/env bash
# Install Docker Engine + docker-compose (standalone binary) if missing.
# Fix broken IPv6 that causes GHCR pull failures.
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

# Fix broken IPv6 on VPS — force all traffic through IPv4.
# sysctl disables IPv6 at kernel level.
sysctl -w net.ipv6.conf.all.disable_ipv6=1 >/dev/null 2>&1 || true
sysctl -w net.ipv6.conf.default.disable_ipv6=1 >/dev/null 2>&1 || true

# Persist across reboots
if ! grep -q 'disable_ipv6' /etc/sysctl.conf 2>/dev/null; then
  cat >> /etc/sysctl.conf <<'EOF'

# Disable broken IPv6 (fixes GHCR pull failures)
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
EOF
fi

# Also disable IPv6 at Docker daemon level — Docker has its own
# network stack and DNS resolver that still tries IPv6 even when
# the kernel sysctl is set. This is the critical fix for GHCR pulls.
DOCKER_DAEMON_JSON="/etc/docker/daemon.json"
NEED_RESTART=false

mkdir -p /etc/docker
if [[ -f "$DOCKER_DAEMON_JSON" ]]; then
  if ! grep -q '"ipv6"' "$DOCKER_DAEMON_JSON" 2>/dev/null; then
    python3 -c "
import json, sys
with open('$DOCKER_DAEMON_JSON') as f:
    cfg = json.load(f)
cfg['ipv6'] = False
with open('$DOCKER_DAEMON_JSON', 'w') as f:
    json.dump(cfg, f, indent=2)
"
    NEED_RESTART=true
  fi
else
  echo '{ "ipv6": false }' > "$DOCKER_DAEMON_JSON"
  NEED_RESTART=true
fi

if [[ "$NEED_RESTART" == true ]]; then
  echo "Restarting Docker daemon to apply IPv6 fix..."
  systemctl restart docker || service docker restart
  sleep 3
fi

# Nuclear option: block ALL IPv6 at the firewall level.
# daemon.json "ipv6: false" only controls Docker's internal networks —
# it does NOT prevent Docker from making outbound IPv6 connections
# during image pulls. ip6tables drops ALL IPv6 packets at kernel level.
if command -v ip6tables >/dev/null 2>&1; then
  # Only add rules if not already present
  if ! ip6tables -C OUTPUT -j DROP 2>/dev/null; then
    echo "Blocking IPv6 via ip6tables..."
    ip6tables -A OUTPUT -j DROP 2>/dev/null || true
  fi
fi

docker --version
docker-compose version
