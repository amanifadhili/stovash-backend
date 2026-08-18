export function parseAmountMinor(value: unknown): bigint | null {
  if (typeof value === 'bigint') return value > 0n ? value : null;
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

export function parseOccurredOn(value: unknown): Date | null {
  if (typeof value !== 'string') return null;
  const day = value.trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null;
  const parsed = new Date(`${day}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== day) return null;
  return parsed;
}

export function requireNonEmptyString(value: unknown, max = 200): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export function toIsoDate(value: Date): string {
  return value.toISOString().slice(0, 10);
}
