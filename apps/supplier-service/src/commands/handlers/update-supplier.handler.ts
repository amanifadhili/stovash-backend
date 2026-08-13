import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdateSupplierCommand } from '../impl/update-supplier.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';
import { Inject } from '@nestjs/common';

@CommandHandler(UpdateSupplierCommand)
export class UpdateSupplierHandler extends BaseCommandHandler<UpdateSupplierCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: UpdateSupplierCommand): Promise<ICommandResponse<any>> {
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

      const existing = await prisma.supplier.findFirst({ where: { id: payload.id, tenantId } });
      if (!existing) {
        return { status: 'error', traceId, message: 'Supplier not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const data: any = {};
      if (payload.name !== undefined) data.name = payload.name;
      if (payload.email !== undefined) data.email = payload.email;
      if (payload.phone !== undefined) data.phone = payload.phone;
      if (payload.address !== undefined) data.address = payload.address;
      if (payload.status !== undefined) data.status = payload.status;

      const supplier = await prisma.supplier.update({ where: { id: payload.id }, data });

      this.eventBus
        .publish(
          {
            eventType: 'SupplierUpdated',
            aggregateId: supplier.id,
            aggregateType: 'Supplier',
            payload: supplier,
            timestamp: new Date().toISOString(),
            correlationId: traceId,
          },
          'supplier.updated',
        )
        .catch(() => {});

      return { status: 'success', traceId, data: supplier };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update supplier',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
