import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetTenantShopsCommand } from '../impl/get-tenant-shops.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetTenantShopsCommand)
export class GetTenantShopsHandler extends BaseCommandHandler<GetTenantShopsCommand> {
  async execute(command: GetTenantShopsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const shops = await prisma.shop.findMany({
        where: { tenantId },
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { staff: true, workPeriods: true }
          }
        }
      });

      const data = shops.map((shop: any) => ({
        id: shop.id,
        tenantId: shop.tenantId,
        name: shop.name,
        address: shop.location,
        status: shop.status,
        createdAt: shop.createdAt,
        stats: {
          staffCount: shop._count.staff,
          workPeriodCount: shop._count.workPeriods,
        }
      }));

      return {
        status: 'success',
        traceId,
        data
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch shops',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
