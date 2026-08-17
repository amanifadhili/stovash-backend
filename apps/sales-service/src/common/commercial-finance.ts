import { firstValueFrom, timeout } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { recordFinancialFailClosed } from '@electronic-shop/metrics';

export const NON_TILL_METHODS = new Set(['CREDIT', 'LOAN']);

export function francsToMinor(francs: unknown): string | null {
  const n = Number(francs);
  if (!Number.isFinite(n) || n <= 0) return null;
  const minor = Math.round(n * 100);
  if (!Number.isSafeInteger(minor) || minor <= 0) return null;
  return String(minor);
}

export function isoDay(value?: Date | string | null): string {
  const d = value ? new Date(value) : new Date();
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

export function operationalKindForMethod(method?: string | null): string | null {
  const m = String(method || '').toUpperCase();
  if (m === 'CASH') return 'OPS_CASH';
  if (m === 'MOMO' || m === 'MOBILE' || m === 'MOBILE_MONEY') return 'OPS_MOMO';
  if (m === 'BANK' || m === 'BANK_TRANSFER' || m === 'CARD' || m === 'CHECK') return 'OPS_MAIN_BANK';
  if (m === 'OPS_CASH' || m === 'OPS_MOMO' || m === 'OPS_MAIN_BANK' || m === 'OPS_OTHER_BANK') return m;
  return null;
}

export async function sendFinanceCommand(
  client: ClientProxy,
  cmd: string,
  payload: Record<string, unknown>,
  context: Record<string, unknown>,
): Promise<ICommandResponse<any>> {
  try {
    const result = await firstValueFrom(
      client.send({ cmd }, { payload, context }).pipe(timeout(15000)),
    );
    if (!result || result.status === 'error') {
      return {
        status: 'error',
        traceId: (context.traceId as string) || 'unknown',
        message: result?.message || `${cmd} failed`,
        errorCode: result?.errorCode || ErrorCode.INTERNAL_ERROR,
      };
    }
    return result;
  } catch (error: any) {
    recordFinancialFailClosed(cmd);
    return {
      status: 'error',
      traceId: (context.traceId as string) || 'unknown',
      message: error?.message || `${cmd} failed`,
      errorCode: error?.errorCode || ErrorCode.INTERNAL_ERROR,
    };
  }
}
