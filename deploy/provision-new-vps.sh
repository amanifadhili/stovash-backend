#!/usr/bin/env bash
# Bootstrap an empty Ubuntu VPS for STOVASH (nginx + Docker + Postgres).
# Run as root on the NEW Contabo server.
#
#   curl -fsSL ... | bash     # or copy this file and: bash provision-new-vps.sh
set -euo pipefail

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root."
  exit 1
fi

ROOT="/home/deploy/stovash"
FRONTEND="$ROOT/frontend"
BACKEND="$ROOT/backend"
WEBROOT="/var/www/certbot"
EMAIL="${CERTBOT_EMAIL:-admin@stovash.com}"
GHA_PUBKEY='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII2PoBCru1Q1BXLCrocKjH+3v47No6XTvY639OCyrCnD github-actions-stovash'

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y \
  ca-certificates curl gnupg lsb-release \
  nginx certbot python3-certbot-nginx \
  postgresql postgresql-contrib \
  ufw fail2ban rsync git jq unzip

id deploy >/dev/null 2>&1 || useradd --create-home --shell /bin/bash deploy
usermod -aG sudo deploy || true

mkdir -p /home/deploy/.ssh /root/.ssh
chmod 700 /home/deploy/.ssh /root/.ssh
for auth in /root/.ssh/authorized_keys /home/deploy/.ssh/authorized_keys; do
  touch "$auth"
  grep -q "github-actions-stovash" "$auth" 2>/dev/null || echo "$GHA_PUBKEY" >> "$auth"
  chmod 600 "$auth"
done
chown -R deploy:deploy /home/deploy/.ssh

# Docker Engine + docker-compose binary (same as ensure-docker.sh)
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
fi
usermod -aG docker deploy || true
if ! command -v docker-compose >/dev/null 2>&1; then
  curl -fsSL "https://github.com/docker/compose/releases/download/v2.29.7/docker-compose-linux-$(uname -m)" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  ln -sfn /usr/local/bin/docker-compose /usr/bin/docker-compose
fi

mkdir -p "$FRONTEND/releases" "$FRONTEND/shared" \
         "$BACKEND/releases" "$BACKEND/shared" \
         "$WEBROOT" \
         /etc/nginx/snippets /etc/nginx/conf.d \
         /etc/nginx/sites-available /etc/nginx/sites-enabled

if [[ ! -f "$FRONTEND/shared/.env" ]]; then
  cat > "$FRONTEND/shared/.env" <<'EOF'
NEXT_PUBLIC_API_URL=https://api.stovash.com
PORT=5050
EOF
fi

chown -R deploy:deploy "$ROOT"

# Postgres: local only, role created later from dumped SQL.
systemctl enable --now postgresql
sudo -u postgres psql -v ON_ERROR_STOP=1 -c "ALTER SYSTEM SET listen_addresses = '127.0.0.1';" || true
systemctl reload postgresql || systemctl restart postgresql

# Nginx HTTP vhosts (TLS after DNS points here)
cat > /etc/nginx/conf.d/stovash-map.conf <<'EOF'
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
EOF

cat > /etc/nginx/snippets/stovash-proxy.conf <<'EOF'
proxy_http_version 1.1;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $connection_upgrade;
proxy_cache_bypass $http_upgrade;
proxy_read_timeout 60s;
proxy_send_timeout 60s;
EOF

cat > /etc/nginx/sites-available/stovash.com <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name stovash.com www.stovash.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        default_type text/plain;
    }

    location / {
        proxy_pass http://127.0.0.1:5050;
        include /etc/nginx/snippets/stovash-proxy.conf;
    }
}
EOF

cat > /etc/nginx/sites-available/api.stovash.com <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name api.stovash.com;

    client_max_body_size 25m;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        default_type text/plain;
    }

    location / {
        proxy_pass http://127.0.0.1:5051;
        include /etc/nginx/snippets/stovash-proxy.conf;
    }
}
EOF

ln -sfn /etc/nginx/sites-available/stovash.com /etc/nginx/sites-enabled/stovash.com
ln -sfn /etc/nginx/sites-available/api.stovash.com /etc/nginx/sites-enabled/api.stovash.com
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl reload nginx

ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

systemctl enable --now fail2ban || true

echo
echo "VPS provisioned."
echo "  layout : $ROOT"
echo "  docker : $(docker --version)"
echo "  compose: $(docker-compose version 2>/dev/null | head -1 || true)"
echo "Next: restore Postgres dumps, copy shared/.env, docker-compose up, then DNS + certbot."
echo "Certs (after DNS A records point here):"
echo "  certbot --nginx --agree-tos --email $EMAIL --redirect -d stovash.com -d www.stovash.com"
echo "  certbot --nginx --non-interactive --agree-tos --email $EMAIL --redirect -d api.stovash.com"
