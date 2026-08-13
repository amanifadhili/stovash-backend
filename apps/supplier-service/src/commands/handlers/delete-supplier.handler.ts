import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { DeleteSupplierCommand } from '../impl/delete-supplier.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';
import { Inject } from '@nestjs/common';

@CommandHandler(DeleteSupplierCommand)
export class DeleteSupplierHandler extends BaseCommandHandler<DeleteSupplierCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: DeleteSupplierCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;

    try {
      if (!tenantId || !payload?.id) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and supplier id are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const shopId = context?.shopId;
      const existing = await prisma.supplier.findFirst({ where: { id: payload.id, tenantId, ...(shopId ? { OR: [{ shopId: null }, { shopId }] } : { shopId: null }) } });
      if (!existing) {
        return { status: 'error', traceId, message: 'Supplier not found', errorCode: ErrorCode.NOT_FOUND };
      }

      await prisma.supplier.delete({ where: { id: payload.id } });

      this.eventBus
        .publish(
          {
            eventType: 'SupplierDeleted',
            aggregateId: payload.id,
            aggregateType: 'Supplier',
            payload: { id: payload.id },
            timestamp: new Date().toISOString(),
            correlationId: traceId,
          },
          'supplier.deleted',
        )
        .catch(() => {});

      return { status: 'success', traceId, data: { id: payload.id } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to delete supplier',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
