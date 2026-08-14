import { IRequestContext } from '@electronic-shop/types';
import { ExpenseCategoryCode } from '../../expenses/expense-catalog.js';

export class GetExpensesPayload {
  shopId?: string;
  category?: ExpenseCategoryCode | '';
  workPeriodId?: string;
}

export class GetExpensesQuery {
  constructor(
    public readonly payload: GetExpensesPayload,
    public readonly context?: IRequestContext,
  ) {}
}
