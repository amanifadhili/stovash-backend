import { PostJournalEntryHandler } from './post-journal-entry.handler.js';
import { CreateLedgerAccountHandler } from './create-ledger-account.handler.js';
import { OpenWorkPeriodHandler } from './open-work-period.handler.js';
import { CloseWorkPeriodHandler } from './close-work-period.handler.js';
import { CreatePostingBatchHandler } from './create-posting-batch.handler.js';
import { PostBatchHandler } from './post-batch.handler.js';
import { RecordExpenseHandler } from './record-expense.handler.js';
import { PostFinancialTransactionHandler } from './post-financial-transaction.handler.js';
import { RecordGeneralExpenseHandler } from './record-general-expense.handler.js';
import { RecordWorkerAdvanceHandler } from './record-worker-advance.handler.js';
import { RepayPettyCashAdvanceHandler } from './repay-petty-cash-advance.handler.js';
import { RecordPettyCashExpenseHandler } from './record-petty-cash-expense.handler.js';
import { PostTreasuryBooksHandler } from './post-treasury-books.handler.js';
import { PostSaleConfirmationHandler } from './post-sale-confirmation.handler.js';
import { PostPurchasePayableHandler } from './post-purchase-payable.handler.js';
import { PostFinancialCorrectionHandler } from './post-financial-correction.handler.js';

export const CommandHandlers = [
  PostJournalEntryHandler,
  CreateLedgerAccountHandler,
  OpenWorkPeriodHandler,
  CloseWorkPeriodHandler,
  CreatePostingBatchHandler,
  PostBatchHandler,
  RecordExpenseHandler,
  PostFinancialTransactionHandler,
  RecordGeneralExpenseHandler,
  RecordWorkerAdvanceHandler,
  RepayPettyCashAdvanceHandler,
  RecordPettyCashExpenseHandler,
  PostTreasuryBooksHandler,
  PostSaleConfirmationHandler,
  PostPurchasePayableHandler,
  PostFinancialCorrectionHandler,
];


