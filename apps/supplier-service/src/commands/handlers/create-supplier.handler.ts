import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSupplierCommand } from '../impl/create-supplier.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateSupplierCommand)
export class CreateSupplierHandler extends BaseCommandHandler<CreateSupplierCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSupplierCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId || payload?.tenantId;

    try {
      if (!tenantId || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and supplier name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const supplier = await prisma.supplier.create({
        data: {
          tenantId: tenantId,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          address: payload.address,
          status: payload.status || 'ACTIVE',
        }
      });

      // Publish SupplierCreated event
      await this.eventBus.publish(
        {
          eventType: 'SupplierCreated',
          aggregateId: supplier.id,
          aggregateType: 'Supplier',
          payload: supplier,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'supplier.created'
      );

      return {
        status: 'success',
        traceId,
        data: supplier
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create supplier',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
