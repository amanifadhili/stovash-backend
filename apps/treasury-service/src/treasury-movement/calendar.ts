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

const YEAR_MONTH_RE = /^(\d{4})-(\d{2})$/;

/** Shop calendar month (YYYY-MM). Start/end are UTC date-only like parseOccurredOn. */
export function parseYearMonth(value: unknown): { yearMonth: string; startIso: string; endIso: string } | null {
  if (typeof value !== 'string') return null;
  const yearMonth = value.trim();
  const match = YEAR_MONTH_RE.exec(yearMonth);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) return null;
  const startIso = `${yearMonth}-01`;
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const endIso = `${yearMonth}-${String(lastDay).padStart(2, '0')}`;
  if (new Date(`${startIso}T00:00:00.000Z`).toISOString().slice(0, 10) !== startIso) return null;
  if (new Date(`${endIso}T00:00:00.000Z`).toISOString().slice(0, 10) !== endIso) return null;
  return { yearMonth, startIso, endIso };
}

export function calendarDaysInMonth(yearMonth: string): string[] {
  const parsed = parseYearMonth(yearMonth);
  if (!parsed) return [];
  const lastDay = Number(parsed.endIso.slice(8, 10));
  return Array.from({ length: lastDay }, (_, i) => `${yearMonth}-${String(i + 1).padStart(2, '0')}`);
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
