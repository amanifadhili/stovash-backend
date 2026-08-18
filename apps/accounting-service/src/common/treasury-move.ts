import { firstValueFrom, timeout } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';

export type TreasuryMoveFn = (
  payload: Record<string, unknown>,
  context?: IRequestContext,
) => Promise<ICommandResponse<any>>;

export async function sendTreasuryMovement(
  client: ClientProxy,
  payload: Record<string, unknown>,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  try {
    const result = await firstValueFrom(
      client.send({ cmd: 'CreateTreasuryMovement' }, { payload, context }).pipe(timeout(15000)),
    );
    if (!result || result.status === 'error') {
      return {
        status: 'error',
        traceId,
        message: result?.message || 'CreateTreasuryMovement failed',
        errorCode: result?.errorCode || ErrorCode.INTERNAL_ERROR,
      };
    }
    return result;
  } catch (error: any) {
    return {
      status: 'error',
      traceId,
      message: error?.message || 'CreateTreasuryMovement failed',
      errorCode: error?.errorCode || ErrorCode.INTERNAL_ERROR,
    };
  }
}
