import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddProductCommand } from '../impl/add-product.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddProductCommand)
export class AddProductHandler extends BaseCommandHandler<AddProductCommand> {
  async execute(command: AddProductCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.name) {
        return {
          status: 'error',
          traceId,
          message: 'Product name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const product = await prisma.product.create({
        data: {
          tenantId: context.tenantId,
          name: payload.name,
          description: payload.description,
          sku: payload.sku || `SKU-${Date.now()}`
        }
      });

      return {
        status: 'success',
        traceId,
        data: product
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add product',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
