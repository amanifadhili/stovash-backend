#!/usr/bin/env bash
set -euo pipefail

# Back up service databases before a future production migration step.
# Usage:
#   BACKUP_DIR=/var/backups/stovash ./scripts/backup-databases.sh
#   DRY_RUN=1 ./scripts/backup-databases.sh

BACKUP_DIR="${BACKUP_DIR:-./backups/$(date -u +%Y%m%dT%H%M%SZ)}"
SERVICES="${BACKUP_SERVICES:-accounting customer identity inventory purchase report sales supplier tenant treasury}"

if [[ "${DRY_RUN:-0}" != "1" ]] && ! command -v pg_dump >/dev/null 2>&1; then
  echo "ERROR: pg_dump is required for database backups" >&2
  exit 1
fi

mkdir -p "$BACKUP_DIR"
manifest="$BACKUP_DIR/manifest.txt"
completion_marker="$BACKUP_DIR/backup.complete"
rm -f "$completion_marker"
: > "$manifest"

for service in $SERVICES; do
  variable="${service^^}_DATABASE_URL"
  database_url="${!variable:-}"
  output="$BACKUP_DIR/${service}.dump"

  if [[ -z "$database_url" ]]; then
    echo "ERROR: missing $variable for $service" >&2
    exit 1
  fi

  if [[ "${DRY_RUN:-0}" == "1" ]]; then
    echo "DRY RUN: pg_dump $service -> $output"
    printf '%s\t%s\n' "$service" "$output" >> "$manifest"
    continue
  fi

  echo "Backing up $service -> $output"
  pg_dump \
    --dbname="$database_url" \
    --format=custom \
    --file="$output" \
    --no-owner \
    --no-acl
  printf '%s\t%s\n' "$service" "$output" >> "$manifest"
done

printf 'completed_at=%s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$completion_marker"
printf 'Backup completed: %s\n' "$BACKUP_DIR"
