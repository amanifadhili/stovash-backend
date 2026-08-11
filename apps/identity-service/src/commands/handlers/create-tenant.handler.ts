import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateTenantCommand } from '../impl/create-tenant.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import bcrypt from 'bcryptjs';
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
          message: 'Shop name, admin email, password, first name, and last name are required',
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

      // Generate tenant/shop IDs (materialized by the tenant service via TenantCreated event)
      const tenantId = randomUUID();
      const shopId = randomUUID();
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
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: user.id,
            action: 'CreateTenant',
            resource: 'Tenant',
            resourceId: tenantId,
            traceId: traceId || null,
            details: JSON.stringify({ name: payload.name, email: payload.adminEmail })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      // Publish TenantCreated event; tenant service materializes Tenant/Shop/WorkPeriod
      await this.eventBus.publish(
        {
          eventType: 'TenantCreated',
          aggregateId: tenantId,
          aggregateType: 'Tenant',
          payload: {
            tenantId,
            shopId,
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

      return {
        status: 'success',
        traceId,
        data: {
          id: tenantId,
          name: payload.name,
          shopId,
          user: {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
            status: user.status
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
