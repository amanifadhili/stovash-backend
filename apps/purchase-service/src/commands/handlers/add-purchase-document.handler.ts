import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddPurchaseDocumentCommand } from '../impl/add-purchase-document.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddPurchaseDocumentCommand)
export class AddPurchaseDocumentHandler extends BaseCommandHandler<AddPurchaseDocumentCommand> {
  async execute(command: AddPurchaseDocumentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { purchaseId, documentType, fileName, fileUrl, fileSize, mimeType, uploadedById, uploadedByName, notes } = payload;

      const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const document = await prisma.purchaseDocument.create({
        data: {
          purchaseId,
          documentType,
          fileName,
          fileUrl,
          fileSize,
          mimeType,
          uploadedById,
          notes,
        },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'DOCUMENT_ADDED',
          eventData: JSON.stringify({ documentType, fileName, uploadedBy: uploadedByName }),
          userId: uploadedById,
          userName: uploadedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: uploadedById,
          action: 'AddPurchaseDocument',
          resource: 'PurchaseDocument',
          resourceId: document.id,
          traceId,
          details: JSON.stringify({ documentType, fileName }),
        },
      });

      return { status: 'success', traceId, data: document };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add document',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}