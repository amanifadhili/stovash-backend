import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { GetStaffCommand } from '../impl/get-staff.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(GetStaffCommand)
export class GetStaffHandler extends BaseCommandHandler<GetStaffCommand> {
  async execute(command: GetStaffCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const staff = await prisma.staff.findMany({
        where: {
          tenantId,
          ...(payload?.shopId ? { shopId: payload.shopId } : {}),
        },
        orderBy: { createdAt: 'desc' },
        include: {
          shop: { select: { id: true, name: true } },
        },
      });

      return {
        status: 'success',
        traceId,
        data: staff.map((member) => ({
          id: member.id,
          userId: member.userId,
          tenantId: member.tenantId,
          shopId: member.shopId,
          shopName: member.shop?.name ?? null,
          firstName: member.firstName,
          lastName: member.lastName,
          email: member.email,
          role: member.role,
          status: member.status,
          createdAt: member.createdAt,
        })),
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch staff',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
