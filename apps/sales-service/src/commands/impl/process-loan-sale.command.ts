import { ICommand } from '@electronic-shop/types';

export class ProcessLoanSaleCommand implements ICommand {
  readonly command = 'ProcessLoanSale';
  readonly description = 'Process a loan sale where customer pays in installments';

  constructor(
    public readonly payload: {
      customerId: string;
      items: Array<{
        inventoryItemId: string;
        quantity: number;
        unitPrice: number;
        unitCost?: number;
      }>;
      totalAmount: number;
      downPayment: number;
      installmentAmount: number;
      numberOfInstallments: number;
      interestRate?: number; // Optional interest rate for the loan
      paymentSchedule: Array<{
        dueDate: string;
        amount: number;
      }>;
    },
    public readonly context: any
  ) {}
}
