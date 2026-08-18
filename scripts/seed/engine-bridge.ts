import { postTreasuryBooks, getProfitAllocation } from '../../apps/accounting-service/src/engine-ledger/post-treasury-books.js';
import { getEngineReport } from '../../apps/accounting-service/src/engine-ledger/engine-report.js';
import { setShopTodayForTests as setAccountingToday } from '../../apps/accounting-service/src/financial-transaction/calendar.js';
import { setShopTodayForTests as setTreasuryToday } from '../../apps/treasury-service/src/treasury-movement/calendar.js';
import type { TreasuryBooksClient } from '../../apps/treasury-service/src/treasury-movement/types.js';
import type { ICommandResponse } from '@electronic-shop/types';

export const SEED_RANGE = {
  start: '2026-05-18',
  end: '2026-08-17',
} as const;

export function francsToMinor(francs: number): string {
  return String(Math.round(francs * 100));
}

export function workingDays(startIso: string, endIso: string): string[] {
  const days: string[] = [];
  const cursor = new Date(`${startIso}T12:00:00+02:00`);
  const end = new Date(`${endIso}T12:00:00+02:00`);
  while (cursor <= end) {
    if (cursor.getUTCDay() !== 0) {
      days.push(cursor.toISOString().slice(0, 10));
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

export function setSeedShopToday(iso: string | null): void {
  setAccountingToday(iso);
  setTreasuryToday(iso);
}

export function requireOk<T>(res: ICommandResponse<T>, label: string): T {
  if (res.status !== 'success' || res.data == null) {
    throw new Error(`${label}: ${res.message || 'failed'}`);
  }
  return res.data;
}

export function demoUuid(series: string, n: number): string {
  const hex = `${series.padEnd(4, '0').slice(0, 4)}${n.toString(16).padStart(8, '0')}`.slice(0, 12);
  return `a1000000-0000-4000-8000-${hex}`;
}

export const engineBooks: TreasuryBooksClient = {
  postBooks: async (payload, context) => {
    const res = await postTreasuryBooks(payload, context);
    if (res.status !== 'success' || !res.data?.financialTransaction?.id) {
      throw Object.assign(new Error(res.message || 'PostTreasuryBooks failed'), {
        errorCode: res.errorCode,
      });
    }
    return {
      financialTransaction: res.data.financialTransaction,
      journal: res.data.journal,
    };
  },
  getAllocation: async (context) => {
    const res = await getProfitAllocation(context);
    if (res.status !== 'success') {
      throw Object.assign(new Error(res.message || 'GetProfitAllocation failed'), {
        errorCode: res.errorCode,
      });
    }
    return res.data;
  },
  getEngineReport: async (context) => {
    const res = await getEngineReport(context);
    return res.status === 'success' ? res.data : null;
  },
};
