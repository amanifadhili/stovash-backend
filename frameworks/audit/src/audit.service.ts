import { Injectable, Logger } from '@nestjs/common';
import { IRequestContext } from '@electronic-shop/types';
import { prisma } from '@electronic-shop/database';

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);

  async logAction(context: IRequestContext, action: string, details?: any, resource?: string, resourceId?: string) {
    this.logger.log({
      event: 'AUDIT_LOG',
      action,
      userId: context?.userId,
      tenantId: context?.tenantId,
      shopId: context?.shopId,
      traceId: context?.traceId,
      details,
      timestamp: new Date().toISOString()
    });

    if (context?.tenantId) {
      try {
        await (prisma as any).auditLog.create({
          data: {
            tenantId: context.tenantId,
            shopId: context.shopId || null,
            userId: context.userId || null,
            action,
            resource: resource || 'SYSTEM',
            resourceId: resourceId || null,
            traceId: context.traceId || null,
            details: details ? JSON.stringify(details) : null
          }
        });
      } catch (err: any) {
        this.logger.error(`Failed to persist audit log: ${err.message}`);
      }
    }
  }
}
