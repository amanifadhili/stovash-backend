import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateCustomerCommand } from '../impl/create-customer.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerHandler extends BaseCommandHandler<CreateCustomerCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateCustomerCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.firstName || !payload?.lastName) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, first name, and last name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const customer = await prisma.customer.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone,
          status: payload.status || 'ACTIVE',
        }
      });

      // Publish CustomerCreated event
      await this.eventBus.publish(
        {
          eventType: 'CustomerCreated',
          aggregateId: customer.id,
          aggregateType: 'Customer',
          payload: customer,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'customer.created'
      );

      return {
        status: 'success',
        traceId,
        data: customer
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create customer',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
