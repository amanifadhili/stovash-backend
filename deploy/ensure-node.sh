#!/usr/bin/env bash
# Ensure Node 22 via nvm for the deploy user (no apt nodejs).
set -euo pipefail

DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_HOME="$(getent passwd "$DEPLOY_USER" | cut -d: -f6)"
NVM_DIR="${DEPLOY_HOME}/.nvm"
NODE_VERSION="${NODE_VERSION:-22.13.0}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ -f "$SCRIPT_DIR/../.nvmrc" ]]; then
  NODE_VERSION="$(tr -d '[:space:]' < "$SCRIPT_DIR/../.nvmrc")"
elif [[ -f "${PWD}/.nvmrc" ]]; then
  NODE_VERSION="$(tr -d '[:space:]' < "${PWD}/.nvmrc")"
fi

id "$DEPLOY_USER" >/dev/null 2>&1 || useradd --create-home --shell /bin/bash "$DEPLOY_USER"

if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then
  sudo -u "$DEPLOY_USER" -H bash -c 'curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash'
fi

sudo -u "$DEPLOY_USER" -H bash -c "
  export NVM_DIR=\"\$HOME/.nvm\"
  . \"\$NVM_DIR/nvm.sh\"
  nvm install ${NODE_VERSION}
  nvm alias default ${NODE_VERSION}
  nvm use default
  echo \"Node \$(node -v)  npm \$(npm -v)  (nvm)\"
"
