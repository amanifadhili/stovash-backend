import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateTenantCommand } from '../impl/create-tenant.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { EventBus } from '@electronic-shop/framework-event';
import { randomUUID } from 'crypto';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler extends BaseCommandHandler<CreateTenantCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateTenantCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.name || !payload?.adminEmail || !payload?.adminPassword || !payload?.firstName || !payload?.lastName) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant name, admin email, password, first name, and last name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: payload.adminEmail }
      });
      if (existingUser) {
        return {
          status: 'error',
          traceId,
          message: 'An account with this email already exists',
          errorCode: ErrorCode.TENANT_EXISTS
        };
      }

      // Registration creates a Tenant + the owner (admin) User only.
      // Shops are created separately by the owner after registration.
      const tenantId = randomUUID();
      const hashedPassword = await bcrypt.hash(payload.adminPassword, 10);

      const user = await prisma.user.create({
        data: {
          tenantId,
          email: payload.adminEmail,
          password: hashedPassword,
          firstName: payload.firstName,
          lastName: payload.lastName,
          role: 'ADMIN',
          status: 'ACTIVE',
        }
      });

      try {
        await prisma.permissionAuditLog.create({
          data: {
            tenantId,
            actorId: user.id,
            targetUserId: user.id,
            action: 'CreateTenant',
            traceId: traceId || null,
            reason: JSON.stringify({ name: payload.name, email: payload.adminEmail })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      // Publish TenantCreated event; the tenant service materializes the Tenant
      // (and the owner Staff record). No shop is created here on purpose — the
      // owner will create shop(s) via CreateShop after onboarding.
      await this.eventBus.publish(
        {
          eventType: 'TenantCreated',
          aggregateId: tenantId,
          aggregateType: 'Tenant',
          payload: {
            tenantId,
            name: payload.name,
            userId: user.id,
            email: user.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'tenant.created'
      );

      // Sign a JWT so the owner is auto-authenticated after registration and can
      // immediately proceed to create their first shop.
      const accessToken = jwt.sign(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
          tenantId
        },
        process.env.JWT_SECRET || 'dev-secret-key',
        { expiresIn: '1d' }
      );

      return {
        status: 'success',
        traceId,
        data: {
          id: tenantId,
          name: payload.name,
          accessToken,
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            status: user.status,
            tenantId
          }
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create tenant',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
