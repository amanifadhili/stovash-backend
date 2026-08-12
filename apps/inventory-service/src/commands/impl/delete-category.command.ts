import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class DeleteCategoryPayload {
  categoryId!: string;
}

export class DeleteCategoryCommand extends BaseCommand<DeleteCategoryPayload> {
  constructor(payload: DeleteCategoryPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
