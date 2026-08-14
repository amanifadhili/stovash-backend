import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateShopCommand } from '../impl/create-shop.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateShopCommand)
export class CreateShopHandler extends BaseCommandHandler<CreateShopCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateShopCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and shop name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const shop = await prisma.shop.create({
        data: {
          tenantId,
          name: payload.name,
          location: payload.address || null,
          status: payload.status || 'ACTIVE',
        }
      });

      // Link the requesting user as a staff member of the new shop (owner = ADMIN),
      // seeding the shop's staff roster. staffId.userId is unique, so upsert.
      if (context?.userId) {
        await prisma.staff.upsert({
          where: { userId: context.userId },
          update: { status: 'ACTIVE' },
          create: {
            tenantId,
            shopId: shop.id,
            userId: context.userId,
            firstName: payload.firstName || context?.firstName || '',
            lastName: payload.lastName || context?.lastName || '',
            email: payload.email || context?.email || '',
            role: 'ADMIN',
            status: 'ACTIVE',
          }
        });
      }

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId: shop.id,
            userId: context?.userId || null,
            action: 'CreateShop',
            resource: 'Shop',
            resourceId: shop.id,
            traceId,
            details: JSON.stringify({ name: payload.name, tenantId })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      // Publish ShopCreated so other bounded contexts (inventory, sales, ...) can
      // materialize shop-scoped state.
      await this.eventBus.publish(
        {
          eventType: 'ShopCreated',
          aggregateId: shop.id,
          aggregateType: 'Shop',
          payload: {
            shopId: shop.id,
            tenantId,
            name: shop.name,
            createdBy: context?.userId || null,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'shop.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          id: shop.id,
          tenantId: shop.tenantId,
          name: shop.name,
          address: shop.location,
          status: shop.status,
          createdAt: shop.createdAt,
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create shop',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
