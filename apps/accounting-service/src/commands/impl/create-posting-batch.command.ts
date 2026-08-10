import { ICommand } from '@electronic-shop/types';

export class CreatePostingBatchCommand implements ICommand {
  readonly command = 'CreatePostingBatch';
  readonly description = 'Create a posting batch for journal entries';

  constructor(
    public readonly payload: {
      name: string;
      description?: string;
      journalEntryIds: string[];
    },
    public readonly context: any
  ) {}
}
