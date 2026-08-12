import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseReturnCommand } from '../impl/create-purchase-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreatePurchaseReturnCommand)
export class CreatePurchaseReturnHandler extends BaseCommandHandler<CreatePurchaseReturnCommand> {
  async execute(command: CreatePurchaseReturnCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { tenantId, shopId, purchaseId, supplierId, returnNumber, reason, createdById, createdByName } = payload;

      if (purchaseId) {
        const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
        if (!purchase) {
          return { status: 'error', traceId, message: 'Original purchase not found', errorCode: ErrorCode.NOT_FOUND };
        }
      }

      const returnDoc = await prisma.purchaseReturn.create({
        data: {
          tenantId,
          shopId,
          purchaseId,
          supplierId,
          returnNumber,
          reason,
          totalAmount: 0,
          refundAmount: 0,
          status: 'PENDING',
          createdById,
        },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchaseId || '',
          eventType: 'RETURN_INITIATED',
          eventData: JSON.stringify({ returnNumber, reason, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreatePurchaseReturn',
          resource: 'PurchaseReturn',
          resourceId: returnDoc.id,
          traceId,
          details: JSON.stringify({ returnNumber, purchaseId, supplierId }),
        },
      });

      return { status: 'success', traceId, data: returnDoc };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}