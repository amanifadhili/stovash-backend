import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateBrandCommand } from '../impl/create-brand.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateBrandCommand)
export class CreateBrandHandler extends BaseCommandHandler<CreateBrandCommand> {
  async execute(command: CreateBrandCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.name || payload.name.trim().length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Brand name is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.name.length > 100) {
        return {
          status: 'error',
          traceId,
          message: 'Brand name must be 100 characters or less',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const existing = await prisma.brand.findFirst({
        where: {
          tenantId: context.tenantId,
          name: { equals: payload.name.trim(), mode: 'insensitive' }
        }
      });

      if (existing) {
        return {
          status: 'error',
          traceId,
          message: `Brand "${payload.name}" already exists`,
          errorCode: "CONFLICT"
        };
      }

      const brand = await prisma.brand.create({
        data: {
          tenantId: context.tenantId,
          name: payload.name.trim(),
          description: payload.description?.trim() || null,
          createdBy: context.userId || 'system'
        }
      });

      return {
        status: 'success',
        traceId,
        data: brand
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create brand',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
