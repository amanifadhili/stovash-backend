import { IRequestContext } from '@electronic-shop/types';

export class GetCategoryByIdPayload {
  categoryId!: string;
}

export class GetCategoryByIdQuery {
  constructor(
    public readonly payload: GetCategoryByIdPayload,
    public readonly context?: IRequestContext
  ) {}
}
