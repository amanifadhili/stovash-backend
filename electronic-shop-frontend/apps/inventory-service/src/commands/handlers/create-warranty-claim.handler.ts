import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateWarrantyClaimCommand } from '../impl/create-warranty-claim.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateWarrantyClaimCommand)
export class CreateWarrantyClaimHandler extends BaseCommandHandler<CreateWarrantyClaimCommand> {
  async execute(command: CreateWarrantyClaimCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context for creating warranty claims',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber || !payload.issueDescription) {
        return {
          status: 'error',
          traceId,
          message: 'serialNumber and issueDescription are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, shopId, serialNumber: payload.serialNumber }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item with serial number ${payload.serialNumber} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const result = await prisma.$transaction(async (tx) => {
        // 1. Update item status to DEFECTIVE
        const updatedInvItem = await tx.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'DEFECTIVE' }
        });

        // 2. Create WarrantyClaim
        const warrantyClaim = await tx.warrantyClaim.create({
          data: {
            tenantId,
            shopId,
            serialNumber: payload.serialNumber,
            customerName: payload.customerName || null,
            issueDescription: payload.issueDescription,
            status: payload.status || 'LOGGED',
            resolution: payload.resolution || null,
            createdById: context.userId || 'system'
          }
        });

        return { warrantyClaim, updatedInvItem };
      });

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create warranty claim',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
