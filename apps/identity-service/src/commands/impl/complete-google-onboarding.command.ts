import { BaseCommand } from '@electronic-shop/framework-command';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { prisma } from '../../database/client.js';
import { EventBus } from '@electronic-shop/framework-event';
import { randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';

export class CompleteGoogleOnboardingPayload {
  userId!: string;
}

export class CompleteGoogleOnboardingCommand extends BaseCommand<CompleteGoogleOnboardingPayload> {
  constructor(payload: CompleteGoogleOnboardingPayload) {
    super(payload);
  }
}

@CommandHandler(CompleteGoogleOnboardingCommand)
export class CompleteGoogleOnboardingHandler extends BaseCommandHandler<CompleteGoogleOnboardingCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CompleteGoogleOnboardingCommand): Promise<ICommandResponse<any>> {
    const { payload } = command;
    const traceId = command.context?.traceId || 'unknown';

    try {
      if (!payload?.userId) {
        return {
          status: 'error',
          traceId,
          message: 'User ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const user = await prisma.user.findUnique({ where: { id: payload.userId } });
      if (!user) {
        return {
          status: 'error',
          traceId,
          message: 'User not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const tenantId = randomUUID();

      await prisma.user.update({
        where: { id: user.id },
        data: { tenantId, role: 'ADMIN' },
      });

      await this.eventBus.publish(
        {
          eventType: 'TenantCreated',
          aggregateId: tenantId,
          aggregateType: 'Tenant',
          payload: {
            tenantId,
            name: `${user.firstName}'s Shop`,
            userId: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'tenant.created',
      );

      const accessToken = jwt.sign(
        { sub: user.id, email: user.email, role: 'ADMIN', tenantId },
        process.env.JWT_SECRET || 'dev-secret-key',
        { expiresIn: '1d' },
      );

      return {
        status: 'success',
        traceId,
        data: {
          id: tenantId,
          accessToken,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: 'ADMIN',
            status: user.status,
            tenantId,
          },
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to complete Google onboarding',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
