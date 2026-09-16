import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetMyShopsCommand } from '../impl/get-my-shops.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetMyShopsCommand)
export class GetMyShopsHandler extends BaseCommandHandler<GetMyShopsCommand> {
  async execute(command: GetMyShopsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      const userId = context?.userId;
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // If userId is available, try to find shops via Staff records
      if (userId) {
        const staffRecords = await prisma.staff.findMany({
          where: { tenantId, userId },
          include: {
            shop: {
              include: {
                _count: {
                  select: { staff: true, workPeriods: true }
                }
              }
            }
          }
        });

        const assignedShops = staffRecords
          .filter((record: any) => record.shop)
          .map((record: any) => ({
            id: record.shop.id,
            tenantId: record.shop.tenantId,
            name: record.shop.name,
            address: record.shop.location,
            status: record.shop.status,
            createdAt: record.shop.createdAt,
            stats: {
              staffCount: record.shop._count.staff,
              workPeriodCount: record.shop._count.workPeriods,
            }
          }));

        // If staff records exist with shops, return them
        if (assignedShops.length > 0) {
          return {
            status: 'success',
            traceId,
            data: assignedShops
          };
        }
      }

      // Fallback: return all tenant shops (for users without Staff records
      // or when userId is not available)
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
        message: error.message || 'Failed to fetch your shops',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
