import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateStaffCommand } from '../impl/create-staff.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateStaffCommand)
export class CreateStaffHandler extends BaseCommandHandler<CreateStaffCommand> {
  async execute(command: CreateStaffCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.firstName || !payload?.lastName || !payload?.email) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, first name, last name, and email are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const staff = await prisma.staff.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone,
          role: payload.role || 'STAFF',
          status: payload.status || 'ACTIVE',
        }
      });

      return {
        status: 'success',
        traceId,
        data: staff
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create staff',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
