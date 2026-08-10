import { ICommand } from '@electronic-shop/types';

export class PostBatchCommand implements ICommand {
  readonly command = 'PostBatch';
  readonly description = 'Post a batch of journal entries';

  constructor(
    public readonly payload: {
      batchId: string;
    },
    public readonly context: any
  ) {}
}
