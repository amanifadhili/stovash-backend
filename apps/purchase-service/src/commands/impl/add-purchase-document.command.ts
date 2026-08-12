import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface AddPurchaseDocumentPayload {
  purchaseId: string;
  documentType: 'INVOICE' | 'QUOTATION' | 'PO' | 'DELIVERY_NOTE' | 'GRN' | 'RECEIPT' | 'WARRANTY' | 'OTHER';
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  mimeType?: string;
  uploadedById: string;
  uploadedByName: string;
  notes?: string;
  traceId?: string;
}

export class AddPurchaseDocumentCommand extends BaseCommand<AddPurchaseDocumentPayload> {
  constructor(payload: AddPurchaseDocumentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}