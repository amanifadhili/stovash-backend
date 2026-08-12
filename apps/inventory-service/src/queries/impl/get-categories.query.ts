import { IRequestContext } from '@electronic-shop/types';

export class GetCategoriesPayload {
  search?: string;
  parentId?: string | null;
}

export class GetCategoriesQuery {
  constructor(
    public readonly payload: GetCategoriesPayload,
    public readonly context?: IRequestContext
  ) {}
}
