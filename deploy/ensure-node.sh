#!/usr/bin/env bash
# Install Node.js 22 on the VPS if the system node is older.
set -euo pipefail

NODE_BIN="${NODE_BIN:-/usr/bin/node}"

need_install=0
if ! command -v "$NODE_BIN" >/dev/null 2>&1 && ! command -v node >/dev/null 2>&1; then
  need_install=1
else
  ver="$("$NODE_BIN" -v 2>/dev/null || node -v 2>/dev/null || echo v0)"
  case "$ver" in
    v22.*|v23.*|v24.*) ;;
    *) need_install=1 ;;
  esac
fi

if [[ "$need_install" -eq 1 ]]; then
  apt-get update
  apt-get install -y ca-certificates curl gnupg
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

echo "Node $(/usr/bin/node -v)  npm $(/usr/bin/npm -v)"
