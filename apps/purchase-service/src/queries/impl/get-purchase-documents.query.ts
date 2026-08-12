import { IRequestContext } from '@electronic-shop/types';
import { GetPurchaseDocumentsPayload } from './index.js';

export class GetPurchaseDocumentsQuery {
  constructor(
    public readonly payload: GetPurchaseDocumentsPayload,
    public readonly context?: IRequestContext
  ) {}
}