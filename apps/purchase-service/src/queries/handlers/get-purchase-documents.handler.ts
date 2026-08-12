import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPurchaseDocumentsQuery } from '../impl/get-purchase-documents.query.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@QueryHandler(GetPurchaseDocumentsQuery)
export class GetPurchaseDocumentsHandler implements IQueryHandler<GetPurchaseDocumentsQuery> {
  async execute(query: GetPurchaseDocumentsQuery): Promise<ICommandResponse<any>> {
    const { payload, context } = query;
    const traceId = context?.traceId || 'unknown';

    try {
      const { purchaseId } = payload;

      const documents = await prisma.purchaseDocument.findMany({
        where: { purchaseId },
        orderBy: { uploadedAt: 'desc' },
      });

      return { status: 'success', traceId, data: documents };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fetch documents',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}