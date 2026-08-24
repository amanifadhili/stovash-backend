import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateUserCommand } from '../impl/create-user.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import bcrypt from 'bcryptjs';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler extends BaseCommandHandler<CreateUserCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateUserCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId || !payload?.email || !payload?.password || !payload?.firstName || !payload?.lastName) {
        return {
          status: 'error',
          traceId,
          message: 'Email, password, first name, and last name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: payload.email }
      });

      if (existingUser) {
        return {
          status: 'error',
          traceId,
          message: 'User with this email already exists',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const hashedPassword = await bcrypt.hash(payload.password, 10);

      const user = await prisma.user.create({
        data: {
          tenantId,
          email: payload.email,
          password: hashedPassword,
          firstName: payload.firstName,
          lastName: payload.lastName,
          role: payload.role || 'STAFF',
          status: 'ACTIVE',
        }
      });

      // Log audit action
      try {
        await prisma.permissionAuditLog.create({
          data: {
            tenantId,
            actorId: context?.userId || user.id,
            targetUserId: user.id,
            action: 'CreateUser',
            traceId: context?.traceId || null,
            reason: JSON.stringify({ email: payload.email, role: payload.role || 'STAFF' })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      // Publish UserCreated event (without password)
      await this.eventBus.publish(
        {
          eventType: 'UserCreated',
          aggregateId: user.id,
          aggregateType: 'User',
          payload: {
            id: user.id,
            tenantId: user.tenantId,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            status: user.status,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'user.created'
      );

      const { password: _password, ...safeUser } = user;
      return {
        status: 'success',
        traceId,
        data: safeUser
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create user',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
