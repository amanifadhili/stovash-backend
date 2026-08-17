import { Injectable, OnModuleInit, Logger } from '@nestjs/common';

/**
 * Phase 1 financial rebuild: do not consume sale/purchase/treasury/lend events.
 * Legacy consumers posted wrong journals (account-code and routing-key bugs).
 * Tables remain; this service no longer writes books from the bus.
 */
@Injectable()
export class EventConsumerService implements OnModuleInit {
  private readonly logger = new Logger(EventConsumerService.name);

  async onModuleInit() {
    this.logger.warn(
      'Accounting event consumers are quarantined (FINANCIAL_REBUILD_IN_PROGRESS). Ledger will not post from RabbitMQ.',
    );
  }
}
