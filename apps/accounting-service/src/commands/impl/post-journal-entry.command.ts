import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class PostJournalEntryPayload {
  description!: string;
  entries!: Array<{ accountId: string; type: 'DEBIT' | 'CREDIT'; amount: number }>;
}

export class PostJournalEntryCommand extends BaseCommand<PostJournalEntryPayload> {
  constructor(payload: PostJournalEntryPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
