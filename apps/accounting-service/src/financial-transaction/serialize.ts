import {
  FINANCIAL_TRANSACTION_STATUS_POSTED,
  FinancialTransactionDto,
  FinancialTransactionType,
} from './types.js';

export function serializeFinancialTransaction(row: {
  id: string;
  tenantId: string;
  shopId: string;
  type: string;
  occurredOn: Date;
  occurredAt: Date;
  actorUserId: string | null;
  sourceDomain: string;
  sourceCommand: string;
  sourceId: string;
  idempotencyKey: string;
  amountMinor: bigint;
  currency: string;
  description: string | null;
  reason: string | null;
  originalTransactionId?: string | null;
  status: string;
  metadata: unknown;
}): FinancialTransactionDto {
  return {
    id: row.id,
    tenantId: row.tenantId,
    shopId: row.shopId,
    type: row.type as FinancialTransactionType,
    occurredOn: toIsoDate(row.occurredOn),
    occurredAt: row.occurredAt.toISOString(),
    actorUserId: row.actorUserId,
    sourceDomain: row.sourceDomain,
    sourceCommand: row.sourceCommand,
    sourceId: row.sourceId,
    idempotencyKey: row.idempotencyKey,
    amountMinor: row.amountMinor.toString(),
    currency: row.currency,
    description: row.description,
    reason: row.reason,
    originalTransactionId: row.originalTransactionId ?? null,
    status: FINANCIAL_TRANSACTION_STATUS_POSTED,
    metadata: row.metadata ?? null,
  };
}

export function toIsoDate(value: Date): string {
  return value.toISOString().slice(0, 10);
}

export function parseOccurredOn(value: unknown): Date | null {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return new Date(`${toIsoDate(value)}T00:00:00.000Z`);
  }
  if (typeof value !== 'string') return null;
  const day = value.trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null;
  const parsed = new Date(`${day}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || toIsoDate(parsed) !== day) return null;
  return parsed;
}

/** Integer RWF cents. Rejects floats, zero, negatives, and non-numeric strings. */
export function parseAmountMinor(value: unknown): bigint | null {
  if (typeof value === 'bigint') {
    return value > 0n ? value : null;
  }
  if (typeof value === 'number') {
    if (!Number.isInteger(value) || value <= 0 || !Number.isSafeInteger(value)) return null;
    return BigInt(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!/^[1-9]\d*$/.test(trimmed)) return null;
    try {
      const parsed = BigInt(trimmed);
      return parsed > 0n ? parsed : null;
    } catch {
      return null;
    }
  }
  return null;
}

export function requireNonEmptyString(value: unknown, max = 255): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}
