import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RequestPasswordResetCommand } from '../impl/request-password-reset.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

function getFrontendUrl(): string {
  const frontendUrl = process.env.FRONTEND_URL;
  if (!frontendUrl) {
    throw new Error('FRONTEND_URL is not configured');
  }
  return frontendUrl.replace(/\/$/, '');
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

@CommandHandler(RequestPasswordResetCommand)
export class RequestPasswordResetHandler extends BaseCommandHandler<RequestPasswordResetCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RequestPasswordResetCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.email) {
        return {
          status: 'error',
          traceId,
          message: 'Email is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const user = await prisma.user.findUnique({
        where: { email: payload.email },
        select: { id: true, email: true, firstName: true, lastName: true },
      });

      if (!user) {
        return {
          status: 'success',
          traceId,
          data: { sent: true },
        };
      }

      const token = randomUUID();
      const ttlMinutes = Number(process.env.PASSWORD_RESET_TOKEN_TTL_MINUTES || '60');
      const expiresAt = addMinutes(new Date(), ttlMinutes);
      const resetUrl = `${getFrontendUrl()}/auth/reset-password?token=${encodeURIComponent(token)}`;

      await prisma.token.create({
        data: {
          userId: user.id,
          token,
          type: 'PASSWORD_RESET',
          expiresAt,
          used: false,
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'PasswordResetRequested',
          aggregateId: user.id,
          aggregateType: 'User',
          payload: {
            userId: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            resetUrl,
            expiresAt: expiresAt.toISOString(),
            expiresInMinutes: ttlMinutes,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'password.reset.requested',
      );

      return {
        status: 'success',
        traceId,
        data: { sent: true },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to request password reset',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
