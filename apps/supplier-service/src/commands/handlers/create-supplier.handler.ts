import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSupplierCommand } from '../impl/create-supplier.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateSupplierCommand)
export class CreateSupplierHandler extends BaseCommandHandler<CreateSupplierCommand> {
  async execute(command: CreateSupplierCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID and supplier name are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const supplier = await prisma.supplier.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          address: payload.address,
          status: payload.status || 'ACTIVE',
        }
      });

      return {
        status: 'success',
        traceId,
        data: supplier
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create supplier',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
