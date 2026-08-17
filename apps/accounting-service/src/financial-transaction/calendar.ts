/** Shop calendar day. Africa/Kigali (UTC+2) unless tests override. */
export const SHOP_TIME_ZONE = 'Africa/Kigali';

const LOCK_EXEMPT_TYPES = new Set(['CORRECTION', 'REVERSAL']);

let todayOverride: string | null = null;

export function shopTodayIso(): string {
  if (todayOverride) return todayOverride;
  return new Intl.DateTimeFormat('en-CA', { timeZone: SHOP_TIME_ZONE }).format(new Date());
}

export function setShopTodayForTests(iso: string | null): void {
  todayOverride = iso;
}

export function toCalendarIso(value: Date | string): string {
  if (typeof value === 'string') return value.trim().slice(0, 10);
  return value.toISOString().slice(0, 10);
}

export function isLockExemptType(type: string): boolean {
  return LOCK_EXEMPT_TYPES.has(type);
}

export function calendarLockMessage(occurredOnIso: string, type: string, today = shopTodayIso()): string | null {
  if (occurredOnIso > today) {
    return 'Cannot post to a future calendar day.';
  }
  if (occurredOnIso < today && !isLockExemptType(type)) {
    return 'This calendar day is locked. Only a CORRECTION or REVERSAL with a reason may post to a past day.';
  }
  return null;
}
