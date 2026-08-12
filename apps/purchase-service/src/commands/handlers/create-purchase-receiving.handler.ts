import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseReceivingCommand } from '../impl/create-purchase-receiving.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreatePurchaseReceivingCommand)
export class CreatePurchaseReceivingHandler extends BaseCommandHandler<CreatePurchaseReceivingCommand> {
  async execute(command: CreatePurchaseReceivingCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { purchaseId, receivingNumber, receivedById, receivedByName, receivedAtShop, notes } = payload;

      const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus !== 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Purchase must be CONFIRMED to receive items', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const receiving = await prisma.purchaseReceiving.create({
        data: {
          purchaseId,
          receivingNumber,
          receivedById,
          receivedAtShop,
          notes,
        },
      });

      await prisma.purchase.update({
        where: { id: purchaseId },
        data: { receivingStatus: 'PARTIALLY_RECEIVED' },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'RECEIVING_STARTED',
          eventData: JSON.stringify({ receivingNumber, receivedBy: receivedByName }),
          userId: receivedById,
          userName: receivedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: receivedById,
          action: 'CreatePurchaseReceiving',
          resource: 'PurchaseReceiving',
          resourceId: receiving.id,
          traceId,
          details: JSON.stringify({ receivingNumber, purchaseNumber: purchase.purchaseNumber }),
        },
      });

      return { status: 'success', traceId, data: receiving };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create receiving',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}