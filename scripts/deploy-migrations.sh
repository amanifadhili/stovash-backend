#!/usr/bin/env bash
set -euo pipefail

# Apply only reviewed Prisma migrations after a verified backup.
# Default is dry-run. A real run requires:
#   APPLY_MIGRATIONS=1 BACKUP_DIR=/path/to/backup MIGRATION_SERVICES=identity-service \
#     ./scripts/deploy-migrations.sh

BACKUP_DIR="${BACKUP_DIR:-}"
SERVICES="${MIGRATION_SERVICES:-}"

if [[ -z "$SERVICES" ]]; then
  echo "ERROR: MIGRATION_SERVICES must explicitly list reviewed services" >&2
  exit 1
fi

if [[ -z "$BACKUP_DIR" || ! -f "$BACKUP_DIR/manifest.txt" || ! -f "$BACKUP_DIR/backup.complete" ]]; then
  echo "ERROR: BACKUP_DIR must point to a completed backup containing manifest.txt and backup.complete" >&2
  exit 1
fi

for service in $SERVICES; do
  schema="apps/${service}/prisma/schema.prisma"
  migration_dir="apps/${service}/prisma/migrations"

  if [[ ! -f "$schema" ]]; then
    echo "ERROR: missing schema for $service: $schema" >&2
    exit 1
  fi
  if [[ ! -d "$migration_dir" ]] || ! find "$migration_dir" -mindepth 1 -maxdepth 1 -type d -print -quit | grep -q .; then
    echo "ERROR: $service has no Prisma migration directories" >&2
    exit 1
  fi

done

if [[ "${APPLY_MIGRATIONS:-0}" != "1" ]]; then
  echo "DRY RUN: reviewed migration candidates"
  printf '  - %s\n' $SERVICES
  echo "Set APPLY_MIGRATIONS=1 to execute prisma migrate deploy."
  exit 0
fi

for service in $SERVICES; do
  schema="apps/${service}/prisma/schema.prisma"
  echo "Applying Prisma migrations for $service"
  npx prisma@5.22.0 migrate deploy --schema="$schema"
done

echo "Migration deployment completed for: $SERVICES"
