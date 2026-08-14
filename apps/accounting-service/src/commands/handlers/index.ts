import { PostJournalEntryHandler } from './post-journal-entry.handler.js';
import { CreateLedgerAccountHandler } from './create-ledger-account.handler.js';
import { OpenWorkPeriodHandler } from './open-work-period.handler.js';
import { CloseWorkPeriodHandler } from './close-work-period.handler.js';
import { CreatePostingBatchHandler } from './create-posting-batch.handler.js';
import { PostBatchHandler } from './post-batch.handler.js';
import { RecordExpenseHandler } from './record-expense.handler.js';

export const CommandHandlers = [
  PostJournalEntryHandler,
  CreateLedgerAccountHandler,
  OpenWorkPeriodHandler,
  CloseWorkPeriodHandler,
  CreatePostingBatchHandler,
  PostBatchHandler,
  RecordExpenseHandler,
];


