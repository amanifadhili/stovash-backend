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
    const tenantId = payload?.tenantId || context?.tenantId;
    const shopId = payload?.shopId || context?.shopId;
    const userId = payload?.confirmedBy || context?.userId || 'system';

    try {
      if (!tenantId || !shopId || !payload?.methodId || payload?.amount == null) {
        return {
          status: 'error',
          traceId,
          message: 'Method and counted amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const amount = Number(payload.amount);
      if (!Number.isFinite(amount) || amount < 0) {
        return {
          status: 'error',
          traceId,
          message: 'Counted amount must be 0 or more',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const method = await prisma.paymentMethod.findFirst({
        where: { id: payload.methodId, tenantId, shopId },
      });
      if (!method) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const confirmation = await prisma.physicalConfirmation.create({
        data: {
          tenantId,
          shopId,
          methodId: method.id,
          confirmedBy: userId,
          amount,
          notes: payload.notes || null,
        },
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'CreatePhysicalConfirmation',
            resource: 'PhysicalConfirmation',
            resourceId: confirmation.id,
            traceId,
            details: JSON.stringify({
              methodId: method.id,
              systemBalance: method.balance,
              counted: amount,
              difference: amount - Number(method.balance),
              notes: payload.notes,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      await this.eventBus.publish(
        {
          eventType: 'PhysicalConfirmationCreated',
          aggregateId: confirmation.id,
          aggregateType: 'PhysicalConfirmation',
          tenantId,
          shopId,
          payload: confirmation,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'physical-confirmation.created',
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...confirmation,
          systemBalance: method.balance,
          difference: amount - Number(method.balance),
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create physical confirmation',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
