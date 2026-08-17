#!/usr/bin/env bash
# Install Docker Engine + docker-compose (standalone binary) if missing.
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

docker --version
docker-compose version
