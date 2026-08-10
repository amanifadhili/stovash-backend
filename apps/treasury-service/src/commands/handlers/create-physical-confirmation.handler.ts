import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePhysicalConfirmationCommand } from '../impl/create-physical-confirmation.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreatePhysicalConfirmationCommand)
export class CreatePhysicalConfirmationHandler extends BaseCommandHandler<CreatePhysicalConfirmationCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreatePhysicalConfirmationCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.methodId || !payload?.confirmedBy || !payload?.amount) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, method ID, confirmed by, and amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const confirmation = await prisma.physicalConfirmation.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          methodId: payload.methodId,
          confirmedBy: payload.confirmedBy,
          amount: payload.amount,
          notes: payload.notes,
        }
      });

      // Publish PhysicalConfirmationCreated event
      await this.eventBus.publish(
        {
          eventType: 'PhysicalConfirmationCreated',
          aggregateId: confirmation.id,
          aggregateType: 'PhysicalConfirmation',
          payload: confirmation,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'physical-confirmation.created'
      );

      return {
        status: 'success',
        traceId,
        data: confirmation
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create physical confirmation',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
