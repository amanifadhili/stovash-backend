import { PostJournalEntryHandler } from './post-journal-entry.handler.js';
import { CreateLedgerAccountHandler } from './create-ledger-account.handler.js';

export const CommandHandlers = [
  PostJournalEntryHandler,
  CreateLedgerAccountHandler,
];
