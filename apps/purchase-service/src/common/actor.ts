import { IRequestContext } from '@electronic-shop/types';

export interface Actor {
  tenantId?: string;
  shopId?: string;
  userId?: string;
  userName: string;
  traceId: string;
}

export function actorOf(context?: IRequestContext): Actor {
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId;
  const userName =
    [context?.firstName, context?.lastName].filter(Boolean).join(' ') ||
    context?.email ||
    userId ||
    'system';
  const traceId = context?.traceId || 'unknown';
  return { tenantId, shopId, userId, userName, traceId };
}
