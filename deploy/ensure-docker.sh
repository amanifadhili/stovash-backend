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
# sysctl is immediate + persistent, no Docker restart needed.
sysctl -w net.ipv6.conf.all.disable_ipv6=1 >/dev/null 2>&1 || true
sysctl -w net.ipv6.conf.default.disable_ipv6=1 >/dev/null 2>&1 || true

# Persist across reboots
for f in /etc/sysctl.conf /etc/sysctl.d/99-disable-ipv6.conf; do
  if [[ "$f" == *.conf ]] && [[ ! -f "$f" ]]; then
    mkdir -p "$(dirname "$f")"
  fi
done
if ! grep -q 'disable_ipv6' /etc/sysctl.conf 2>/dev/null; then
  cat >> /etc/sysctl.conf <<'EOF'

# Disable broken IPv6 (fixes GHCR pull failures)
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
EOF
fi

docker --version
docker-compose version
