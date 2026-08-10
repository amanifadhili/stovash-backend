import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSaleCommand } from '../impl/create-sale.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateSaleCommand)
export class CreateSaleHandler extends BaseCommandHandler<CreateSaleCommand> {
  async execute(command: CreateSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, and at least one item are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const totalAmount = payload.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

      const sale = await prisma.sale.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          customerId: payload.customerId,
          totalAmount,
          status: payload.status || 'COMPLETED',
        }
      });

      const saleItems = await Promise.all(
        payload.items.map(item =>
          prisma.saleItem.create({
            data: {
              saleId: sale.id,
              productId: item.productId,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              totalPrice: item.quantity * item.unitPrice,
            }
          })
        )
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...sale,
          items: saleItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
