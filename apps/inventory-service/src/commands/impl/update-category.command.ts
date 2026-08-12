import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class UpdateCategoryPayload {
  categoryId!: string;
  name?: string;
  parentId?: string | null;
}

export class UpdateCategoryCommand extends BaseCommand<UpdateCategoryPayload> {
  constructor(payload: UpdateCategoryPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
