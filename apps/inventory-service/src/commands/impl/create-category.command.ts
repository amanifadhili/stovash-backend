import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateCategoryPayload {
  shopId?: string; // null = shared with all shops; set = owner shop
  sharedWithOtherShops?: boolean;
  sharedShopIds?: string[];
  name!: string;
  parentId?: string;
}

export class CreateCategoryCommand extends BaseCommand<CreateCategoryPayload> {
  constructor(payload: CreateCategoryPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
